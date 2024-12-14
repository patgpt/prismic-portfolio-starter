import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { PrismicNextLink } from "@prismicio/next"
import { cn } from "@/lib/utils"

type BadgeSize = "sm" | "md" | "lg"

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-xs py-0.5 px-3 space-x-1.5",
  md: "text-sm py-1 px-4 space-x-2",
  lg: "text-base py-1.5 px-5 space-x-2.5",
}

const iconSizes: Record<BadgeSize, number> = {
  sm: 14,
  md: 16,
  lg: 18,
}

export const Badge = ({
  text,
  href,
  size = "md",
  className,
}: {
  text: string
  href: string
  size?: BadgeSize
  className?: string
}) => {
  return (
    <PrismicNextLink    
      href={href}
      className={cn(
        "group relative inline-block cursor-pointer rounded-full bg-base-100 p-px no-underline shadow-xl",
        className,
      )}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,hsl(var(--p))_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div
        className={cn(
          "relative z-10 flex items-center rounded-full bg-base-300 ring-1 ring-base-content/10",
          sizeStyles[size],
        )}
      >
        <span>{text}</span>
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover:opacity-40" />
    </PrismicNextLink>
  )
}
