"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AiOutlineExperiment } from "react-icons/ai"
import { BiWater } from "react-icons/bi"
import { BsController, BsMoonStars, BsSun } from "react-icons/bs"
import { FaCoffee, FaHeart, FaLeaf, FaSpaceShuttle } from "react-icons/fa"
import { FaSnowflake } from "react-icons/fa6"
import { FiMonitor } from "react-icons/fi"
import { GiDragonfly, GiForest, GiPartyPopper } from "react-icons/gi"
import { HiLightBulb } from "react-icons/hi"
import { IoColorPaletteOutline } from "react-icons/io5"
import { MdDashboard, MdNightlife, MdOutlineAutoAwesome } from "react-icons/md"
import { RiAliensFill, RiEmotionLine } from "react-icons/ri"
import { TbColorSwatch, TbPalette, TbWand } from "react-icons/tb"

const themes = [
  "system",
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
] as const

const themeIcons = {
  system: <FiMonitor />,
  light: <BsSun />,
  dark: <BsMoonStars />,
  cupcake: <GiPartyPopper />,
  bumblebee: <GiDragonfly />,
  emerald: <FaLeaf />,
  corporate: <HiLightBulb />,
  synthwave: <FaSpaceShuttle />,
  retro: <BsController />,
  cyberpunk: <RiAliensFill />,
  valentine: <FaHeart />,
  halloween: <RiEmotionLine />,
  garden: <GiForest />,
  forest: <GiForest />,
  aqua: <BiWater />,
  lofi: <FaCoffee />,
  pastel: <TbPalette />,
  fantasy: <TbWand />,
  wireframe: <MdDashboard />,
  black: <BsMoonStars />,
  luxury: <MdOutlineAutoAwesome />,
  dracula: <RiEmotionLine />,
  cmyk: <TbColorSwatch />,
  autumn: <IoColorPaletteOutline />,
  business: <HiLightBulb />,
  acid: <AiOutlineExperiment />,
  lemonade: <TbPalette />,
  night: <MdNightlife />,
  coffee: <FaCoffee />,
  winter: <FaSnowflake />,
  default: <BsSun />,
}

export function ThemeController() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="dropdown dropdown-end mr-4 text-base">
      <div tabIndex={0} role="button" className="btn btn-ghost gap-2">
        {themeIcons[theme as keyof typeof themeIcons] || themeIcons.default}
        <span className="hidden text-base-content md:inline">Theme</span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] max-h-96 w-52 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl"
      >
        {themes.map((t) => (
          <li key={t}>
            <button
              className={`btn btn-ghost btn-sm btn-block justify-start gap-2 ${
                theme === t ? "btn-active" : ""
              }`}
              onClick={() => setTheme(t)}
            >
              {themeIcons[t as keyof typeof themeIcons] || themeIcons.default}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
