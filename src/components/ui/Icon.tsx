import { FC } from "react";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// Types
type IconKey = keyof typeof simpleIcons;

interface IconProps {
  name: IconKey;
  color?: string;
  className?: string;
}

// Constants
export const iconMap = {
  javascript: "siJavascript",
  typescript: "siTypescript",
  html: "siHtml5",
  css: "siCss3",
  react: "siReact",
  nextjs: "siNextdotjs",
  astro: "siAstro",
  tailwindcss: "siTailwindcss",
  angular: "siAngular",
  ionic: "siIonic",
  nodejs: "siNodedotjs",
  express: "siExpress",
  puppeteer: "siPuppeteer",
  firebase: "siFirebase",
  mongodb: "siMongodb",
  socketio: "siSocketdotio",
  python: "siPython",
  fastapi: "siFastapi",
  tensorflow: "siTensorflow",
  keras: "siKeras",
  pandas: "siPandas",
  numpy: "siNumpy",
  git: "siGit",
  notion: "siNotion",
  trello: "siTrello",
} as const;

// Component
export const Icon: FC<IconProps> = ({
  name,
  color = "currentColor",
  className,
}) => {
  const icon = simpleIcons[name] as SimpleIcon;
  if (!icon) return null;

  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};
