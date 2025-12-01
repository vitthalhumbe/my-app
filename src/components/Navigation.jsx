"use client";

import { useState } from "react";
import { 
  Home, 
  User, 
  Settings, 
  FolderKanban, 
  Rocket, 
  Star, 
  Mail, 
  Palette 
} from "lucide-react";
import Link from "next/link";
import "./nav.css";

export default function Navigation() {
  const [hovered, setHovered] = useState(null);

  const items = [
    { icon: <Home size={22} />, label: "Home", href: "/" },
    { icon: <User size={22} />, label: "About Me", href: "/about" },
    { icon: <Settings size={22} />, label: "Skills", href: "/skills" },
    { icon: <FolderKanban size={22} />, label: "Projects", href: "/projects" },
    { icon: <Rocket size={22} />, label: "Mission 34", href: "/mission34" },
    { icon: <Star size={22} />, label: "Certifications", href: "/certifications" },
    { icon: <Mail size={22} />, label: "Contact", href: "/contact" },
    { icon: <Palette size={22} />, label: "Hobbies", href: "/hobbies" },
  ];

  return (
    <div className="bottom-nav">
      {items.map((item, i) => {
        let scale = 1;
        if (hovered === i) scale = 1.35;
        if (hovered === i - 1) scale = 1.18;
        if (hovered === i + 1) scale = 1.18;

        return (
          <div 
            key={i} 
            className="dock-item"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* LABEL */}
            <div 
              className="dock-label" 
              style={{ 
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? "translateY(-10px)" : "translateY(0)"
              }}
            >
              {item.label}
            </div>

            {/* ICON BUTTON */}
            <Link
              href={item.href}
              className="dock-btn"
              style={{
                transform: `translateY(${hovered === i ? "-15px" : "0"}) scale(${scale})`,
              }}
            >
              {item.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
