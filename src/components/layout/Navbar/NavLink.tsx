import { motion } from "framer-motion";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { cn } from "../../../lib/utils";
import type { NavItem, SocialLinkData } from "./data";

interface NavLinkProps {
  type?: "nav" | "social";
  item?: NavItem;
  link?: SocialLinkData;
  activePage?: string;
  handleNavClick?: (id: string) => void;
  isMobile?: boolean; 
}

const SocialIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  if (name === "Instagram") return <FaInstagram className={className} />;
  if (name === "Snapchat") return <FaSnapchatGhost className={className} />;
  return <FaTiktok className={className} />;
};

const NavLink = ({
  type = "nav",
  item,
  link,
  activePage,
  handleNavClick,
  isMobile,
}: NavLinkProps) => {
  if (type === "social" && link) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "transition-colors duration-300",
          isMobile
            ? "text-white opacity-70 hover:opacity-100 hover:text-gold-400"
            : `text-white ${link.hover}`
        )}
      >
        <SocialIcon
          name={link.icon}
          className={isMobile ? "w-8 h-8" : "w-5 h-5"}
        />
      </a>
    );
  }

  if (!item) return null; 
  const isActive = activePage === item.id;

  return (
    <button
      onClick={() => handleNavClick?.(item.id)}
      className={cn(
        "relative group transition-colors duration-300 font-medium font-sans",
        isMobile
          ? "block w-full py-4 text-xl border-b border-gray-800/50 px-4 text-left hover:bg-white/5 hover:text-gold-400 hover:pl-6 transition-all"
          : "text-sm uppercase tracking-wider py-2",
        isActive ? "text-gold-400" : "text-white hover:text-gold-400"
      )}
    >
      {item.label}

      {!isMobile && isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gold-400"
        />
      )}
      {!isMobile && !isActive && (
        <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      )}
    </button>
  );
};

export default NavLink;
