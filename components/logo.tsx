import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const color = theme === "light" ? "#d1d5db" : "#374151";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 250">
      <path
        stroke={color}
        strokeWidth="10"
        d="M237.685 5L5 237.685V5h232.685z"
      ></path>
      <path
        fill={color}
        stroke={color}
        strokeWidth="10"
        d="M244.756 237.685L12.071 5h232.685v232.685z"
      ></path>
      <path
        stroke={color}
        strokeWidth="10"
        d="M499.929 5L267.244 237.685V5h232.685z"
      ></path>
      <path
        fill={color}
        stroke={color}
        strokeWidth="10"
        d="M267.244 12.071l232.685 232.685H267.244V12.071z"
      ></path>
    </svg>
  );
};

export default Logo;
