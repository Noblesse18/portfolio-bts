import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";

const RSS_FEEDS = [
  {
    url: "https://www.it-connect.fr/feed/",
    name: "IT-Connect",
    icon: "🔧",
  },
  {
    url: "https://korben.info/feed",
    name: "Korben",
    icon: "💻",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const NewsCard = ({ title, link, pubDate, source, icon, description, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const cleanText = (text) => {
    if (!text) return "";
    const clean = text.replace(/<[^>]*>/g, "");
    return clean.length > 120 ? clean.substring(0, 120) + "..." : clean;
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index}
    >
      <div className="card group h-full hover:border-orange-500/30">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{icon}</span>
          <div>
            <p className="text-sm font-semibold text-orange-400">{source}</p>
            <p className="text-xs text-slate-500">{formatDate(pubDate)}</p>
          </div>
        </div>
        <h4 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-400 line-clamp-2">
          {cleanText(description)}
        </p>
      </div>
    </motion.a>
  );
};

const LoadingCard = () => (
  <div className="card animate-pulse">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 bg-white/10 rounded-full" />
      <div className="space-y-1">
        <div className="w-20 h-3 bg-white/10 rounded" />
        <div className="w-14 h-2 bg-white/5 rounded" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="w-full h-3 bg-white/10 rounded" />
      <div className="w-3/4 h-3 bg-white/10 rounded" />
      <div className="w-full h-2 bg-white/5 rounded mt-3" />
      <div className="w-2/3 h-2 bg-white/5 rounded" />
    </div>
  </div>
);

export default function Veille() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllFeeds = async () => {
      try {
        const allNews = [];

        for (const feed of RSS_FEEDS) {
          try {
            const response = await fetch(
              `${RSS_PROXY}${encodeURIComponent(feed.url)}`
            );
            const data = await response.json();

            if (data.status === "ok" && data.items) {
              const feedNews = data.items.slice(0, 6).map((item) => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                description: item.description,
                source: feed.name,
                icon: feed.icon,
              }));
              allNews.push(...feedNews);
            }
          } catch (feedError) {
            console.error(`Erreur pour ${feed.name}:`, feedError);
          }
        }

        allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        setNews(allNews.slice(0, 9));
        setLoading(false);
      } catch {
        setError("Impossible de charger les actualités");
        setLoading(false);
      }
    };

    fetchAllFeeds();
    const interval = setInterval(fetchAllFeeds, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="veille" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="section-title">📰 Veille Technologique</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Flux RSS en direct de IT-Connect et Korben
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors text-white"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item, index) => (
              <NewsCard key={`${item.link}-${index}`} {...item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
