import clsx from "clsx";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, contatinerClass }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert;
  }, []);
  return (
    <div
      ref={containerRef}
      className={clsx(`animated-title ${contatinerClass}`)}
    >
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex flex-center max-w-full flex-wrap px-10 gap-2 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
