"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  heroContent?: ReactNode;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  heroContent,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        setScrollProgress(0.95);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0012;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1,
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        setScrollProgress(0.95);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.006;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1,
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener,
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener,
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener,
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const expandImmediately = () => {
    setScrollProgress(1);
    setMediaFullyExpanded(true);
    setShowContent(true);
  };

  // Smoothly interpolate from compact centered card to full-viewport 100vw x 100dvh
  const startWidth = isMobileState ? 290 : 360;
  const startHeight = isMobileState ? 380 : 460;
  const currentRadius = Math.round(20 * (1 - scrollProgress));
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start">
        <div className="relative w-full flex flex-col items-center">
          {/* Full-screen interactive stage */}
          <div className="relative flex flex-col items-center justify-center w-full h-[100dvh] overflow-hidden">
            {/* Fading background layer */}
            <motion.div
              className="absolute inset-0 z-0 h-full w-full"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <Image
                src={bgImageSrc}
                alt="Background"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(74,0,0,0.68) 0%, rgba(26,28,28,0.58) 100%)",
                }}
              />
            </motion.div>

            {/* Expanding media container: expands from card to 100vw x 100dvh */}
            <div
              className="relative z-10 overflow-hidden transition-none"
              style={{
                width: `calc(${startWidth}px + (100vw - ${startWidth}px) * ${scrollProgress})`,
                height: `calc(${startHeight}px + (100dvh - ${startHeight}px) * ${scrollProgress})`,
                borderRadius: `${currentRadius}px`,
                boxShadow: mediaFullyExpanded
                  ? "none"
                  : "0px 20px 60px rgba(74, 0, 0, 0.42)",
              }}
            >
              {mediaType === "video" ? (
                mediaSrc.includes("youtube.com") ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <iframe
                      width="100%"
                      height="100%"
                      src={
                        mediaSrc.includes("embed")
                          ? mediaSrc +
                            (mediaSrc.includes("?") ? "&" : "?") +
                            "autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                          : mediaSrc.replace("watch?v=", "embed/") +
                            "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=" +
                            mediaSrc.split("v=")[1]
                      }
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                  </div>
                )
              ) : (
                <Image
                  src={mediaSrc}
                  alt={title || "Media content"}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              )}

              {/* Gradient scrim inside expanded media for readable hero text */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: mediaFullyExpanded
                    ? "linear-gradient(to top, rgba(26,28,28,0.88) 0%, rgba(74,0,0,0.62) 55%, rgba(26,28,28,0.42) 100%)"
                    : "linear-gradient(to top, rgba(74,0,0,0.68) 0%, rgba(26,28,28,0.35) 100%)",
                  transition: "background 0.45s ease",
                }}
              />

              {/* Revealed Hero Content INSIDE the full-screen media */}
              {heroContent && (
                <motion.div
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-10"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{
                    opacity: showContent ? 1 : 0,
                    y: showContent ? 0 : 24,
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ pointerEvents: showContent ? "auto" : "none" }}
                >
                  {heroContent}
                </motion.div>
              )}
            </div>

            {/* Intro split title & scroll hint (fades & splits outward on scroll) */}
            <div
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center gap-3 px-4 transition-none ${
                textBlend ? "mix-blend-difference" : "mix-blend-normal"
              }`}
              style={{
                opacity: Math.max(1 - scrollProgress * 1.6, 0),
                pointerEvents: mediaFullyExpanded ? "none" : "auto",
              }}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold transition-none"
                style={{
                  color: "#ffffff",
                  textShadow: "0 4px 24px rgba(0,0,0,0.45)",
                  transform: `translateX(-${textTranslateX}vw)`,
                }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center transition-none"
                style={{
                  color: "var(--color-primary-fixed)",
                  textShadow: "0 4px 24px rgba(0,0,0,0.45)",
                  transform: `translateX(${textTranslateX}vw)`,
                }}
              >
                {restOfTitle}
              </motion.h2>

              {date && (
                <p
                  className="text-xl md:text-2xl font-bold mt-2"
                  style={{
                    color: "var(--color-primary-fixed)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                    transform: `translateX(-${textTranslateX}vw)`,
                  }}
                >
                  {date}
                </p>
              )}

              {scrollToExpand && !mediaFullyExpanded && (
                <button
                  type="button"
                  onClick={expandImmediately}
                  className="font-semibold text-sm px-5 py-2 rounded-full cursor-pointer mt-3"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "var(--color-primary)",
                    transform: `translateX(${textTranslateX}vw)`,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.24)",
                    border: "none",
                  }}
                >
                  {scrollToExpand}
                </button>
              )}
            </div>
          </div>

          {/* Subsequent page content below full-screen hero */}
          {children && (
            <div className="w-full" style={{ background: "var(--color-surface)" }}>
              {children}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
