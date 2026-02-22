"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface CarouselSlide {
  image: string
  altImage?: string
  title: string
  description: string
  link: string
}

const defaultSlides: CarouselSlide[] = [
  {
    image: "/images/homepage/cadogy_building_brand_experiences.jpg",
    altImage: "Product Development & Engineering",
    title: "We Build Products That Ship",
    description:
      "From discovery and UX to MVP delivery and full-stack engineering. We help startups turn ideas into scalable digital products.",
    link: "/who-we-are",
  },
  {
    image: "/images/homepage/cadogy_Optimize_for_conversion_with_AI.jpg",
    altImage: "AI & LLM Application Development",
    title: "AI-Powered Product Development",
    description:
      "LLM applications, RAG pipelines, AI agents, and production-grade ML systems. Real-world AI products from strategy to deployment.",
    link: "/contact",
  },
  {
    image: "/images/homepage/cadogy_manage_content_that_converts.jpg",
    altImage: "Scale & Optimize",
    title: "Scale With Confidence",
    description:
      "Performance optimization, deployment pipelines, QA, and ongoing maintenance. We make sure your product stays fast and reliable.",
    link: "/contact",
  },
]

interface HeroCarouselProps {
  slides?: CarouselSlide[]
  maxSlides?: number
}

export function HeroCarousel({
  slides: customSlides,
  maxSlides = 5,
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [swipeStart, setSwipeStart] = useState<number | null>(null)
  const [swipeEnd, setSwipeEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const slides = customSlides || defaultSlides

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current?.clientWidth || 0
      setIsMobile(containerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "d") {
        goToNextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "a") {
        goToPrevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  const mobileSettings = {
    gap: 2,
    mainCardWidth: 86,
    visibleNextPrevPercentage: 7,
  }

  const desktopSettings = {
    gap: 1.25,
    mainCardWidth: 92,
    visibleNextPrevPercentage: 4,
  }

  const settings = isMobile ? mobileSettings : desktopSettings

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleSwipeStart = (clientX: number) => {
    if (isMobile) {
      setSwipeStart(clientX)
      setIsSwiping(false)
    }
  }

  const handleSwipeMove = (clientX: number) => {
    if (isMobile && swipeStart !== null) {
      const swipeDifference = Math.abs(clientX - swipeStart)
      if (swipeDifference > 10) {
        setIsSwiping(true)
        setSwipeEnd(clientX)
      }
    }
  }

  const handleSwipeEnd = () => {
    if (isMobile && swipeStart !== null && swipeEnd !== null) {
      const swipeDifference = swipeStart - swipeEnd
      const swipeThreshold = 30

      if (swipeDifference > swipeThreshold) {
        goToNextSlide()
      } else if (swipeDifference < -swipeThreshold) {
        goToPrevSlide()
      }

      setSwipeStart(null)
      setSwipeEnd(null)
      setIsSwiping(false)
    }
  }

  const handleCardClick = (index: number) => {
    if (index !== currentSlide) {
      setCurrentSlide(index)
    }
  }

  if (slides.length === 0) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className="animate-fadeIn relative w-full overflow-hidden md:h-auto"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentSlide * (settings.mainCardWidth + settings.gap)}% + ${settings.visibleNextPrevPercentage}%))`,
          gap: `${settings.gap}%`,
        }}
      >
        {slides.map((slide, index) => {
          const isNextSlide = index === (currentSlide + 1) % slides.length
          const isPrevSlide =
            index === (currentSlide - 1 + slides.length) % slides.length

          return (
            <div
              key={index}
              className={cn(
                "relative h-[620px] flex-shrink-0 select-none transition-transform duration-300 md:h-[735px]",
                isNextSlide || isPrevSlide
                  ? "cursor-pointer transition duration-300 hover:brightness-125"
                  : ""
              )}
              style={{
                width: `${settings.mainCardWidth}%`,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "0.5rem",
              }}
              onTouchStart={(e) => handleSwipeStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => handleSwipeMove(e.targetTouches[0].clientX)}
              onTouchEnd={handleSwipeEnd}
              onClick={() => handleCardClick(index)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/50 p-4 text-center">
                <div className="flex w-full max-w-3xl flex-col items-center px-3 sm:px-6 md:px-8">
                  <div className="mb-3 min-h-[2.5rem] sm:mb-2 sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
                    <h2 className="line-clamp-2 text-base font-bold leading-tight text-white sm:text-xl md:text-2xl lg:text-3xl">
                      {slide.title}
                    </h2>
                  </div>

                  <div className="mb-3 min-h-[2rem] w-full sm:mb-4 sm:min-h-[4rem]">
                    <p className="mx-auto !line-clamp-2 max-w-lg text-xs leading-tight text-slate-200 sm:!line-clamp-2 sm:text-sm sm:leading-relaxed md:text-base">
                      {slide.description}
                    </p>
                  </div>

                  <div className="h-10">
                    <Button variant="hero" size="hero" asChild>
                      <Link
                        href={slide.link}
                        className="inline-flex items-center"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center sm:bottom-4">
        <div className="flex space-x-1 rounded-md bg-black/20 px-2 py-1 backdrop-blur-sm sm:space-x-2 sm:px-3 sm:py-1.5">
          <div className="relative flex space-x-1 sm:space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className="relative h-1.5 sm:h-2"
                style={{
                  width: i === currentSlide ? "1.5rem" : "0.375rem",
                  transition: "width 0.3s ease",
                }}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div className="absolute inset-0 rounded-md bg-white/60 hover:bg-white/80" />
                {i === currentSlide && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-md bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
