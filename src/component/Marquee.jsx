import { twMerge } from "tailwind-merge";

const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  ...props
}) => {
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

  const innerClasses = twMerge(
    "flex shrink-0 justify-around gap-[var(--gap)] min-w-full",
    animationClass,
    pauseOnHover && "hover:[animation-play-state:paused]"
  );

  return (
    <div
      {...props}
      className={twMerge(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      <div className={innerClasses}>
        {children}
      </div>
      <div className={innerClasses} aria-hidden>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
