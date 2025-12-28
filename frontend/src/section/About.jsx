import React from "react";

const About = () => {
  return (
    <>
      {/* ABOUT */}
      <section id="About" className=" py-10">
        <h2 className="text-3xl text-orange-400 text-center mb-10">
          À propos de moi
        </h2>

        <div className="grid grid-cols-2 gap-10 px-10">
          <div className="flex items-center justify-center text-6xl">icon</div>

          <div>
            <h3 className="text-2xl mb-4">Présentation</h3>
            <p className="text-lg">
              Salut, moi c&apos;est Narayanasamy COMARAVEL.
            </p>
          </div>
        </div>
      </section>

      {/* BTS SIO */}
      <section className=" py-10 mt-10">
        <h2 className="text-3xl text-center mb-8">
          Qu’est-ce que le BTS SIO ?
        </h2>

        <p className="text-2xl px-10 mb-10">
          Le Brevet de Technicien Supérieur aux Services Informatiques aux
          Organisations (BTS SIO) forme en deux ans aux métiers de
          l’informatique, notamment administrateur réseau ou développeur, avec
          une insertion professionnelle ou une poursuite d’études.
        </p>

        <h3 className="text-center text-2xl mb-6">Options du BTS SIO</h3>

        <div className="grid grid-cols-2 gap-8 px-10">
          {/* SISR */}
          <div
            className="border-2 border-amber-700 p-6 rounded-xl min-h-[520px] transition-transform duration-300
                 hover:scale-110 hover:-translate-y-1"
          >
            <h4 className="text-3xl text-center mb-4">SISR</h4>
            <p className="text-xl text-center">
              L’option SISR forme des professionnels capables de concevoir,
              installer, administrer et sécuriser des infrastructures
              informatiques (réseaux, serveurs, cybersécurité).
            </p>
            <br />
            <p className="text-xl text-center p-5">Debauché:</p>
            <br />
            <ul className="text-xl list-disc list-inside space-y-1t">
              <li>Administrateur systèmes et réseaux</li>
              <li>Informaticien support et déploiement </li>
              <li>Pilote d’exploitation </li>
              <li>Support systèmes et réseaux</li>
              <li>Technicien d’infrastructure</li>
              <li>Technicien de production</li>
              <li>Technicien micro et réseaux</li>
            </ul>
          </div>

          {/* SLAM */}
          <div
            className=" border-2 border-amber-700 p-6 rounded-xl min-h-[520px] transition-transform duration-300
                 hover:scale-110 hover:-translate-y-1"
          >
            <h4 className="text-3xl text-center mb-4">SLAM</h4>
            <p className="text-xl text-center">
              L’option SLAM est orientée vers le développement d’applications
              (web, mobiles, métiers), la gestion de bases de données et la
              maintenance des solutions logicielles.
            </p>
            <br />
            <p className="text-xl text-center p-5 font-semibold">Debauché:</p>
            <br />
            <ul className="text-xl list-disc list-inside space-y-1">
              <li>Développeur d’applications informatiques</li>
              <li>Développeur informatique</li>
              <li>Analyste d’applications ou d’études</li>
              <li>Analyste programmeur</li>
              <li>Programmeur analyste</li>
              <li>Programmeur d’applications</li>
              <li>Responsable des services applicatifs</li>
              <li>Technicien d’études informatiques</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
