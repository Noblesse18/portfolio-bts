import { twMerge } from "tailwind-merge";

const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex shrink-0 justify-around gap-[--gap] min-w-full animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
      >
        {children}
      </div>
      <div
        className={twMerge(
          "flex shrink-0 justify-around gap-[--gap] min-w-full animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          reverse && "animate-marquee-reverse"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
