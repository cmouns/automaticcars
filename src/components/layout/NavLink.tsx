import React, { useMemo } from 'react';
import type { NavItem, SocialLinkData } from './Navbar.data';
import { InstagramIcon , TiktokIcon , SnapchatIcon} from './Navbar.icons'; 


interface IconProps {
    size: number;
    width: number;
    height: number;
}
type IconComponentType = React.FC<IconProps>;

const SOCIAL_ICON_MAP: { [key: string]: IconComponentType | null } = {
    'Instagram': InstagramIcon,
    'Tiktok': TiktokIcon,
    'Snapchat': SnapchatIcon,
};

type LinkProps = {
  isMobile: boolean;
  className?: string; 
} & (
  | { 
      type: "nav";
      item: NavItem;
      activePage: string;
      handleNavClick: (id: string) => void;
      link?: never;
    }
  | { 
      type: "social";
      link: SocialLinkData; 
      activePage?: never;
      handleNavClick?: never;
      item?: never;
    }
);

function NavLink(props: LinkProps) {
  const { isMobile, className } = props;

  const iconKey = useMemo(() => {
      if (props.type === "social") {
          return props.link.icon;
      }
      return null;
  }, [props.type, props.link]);

  const Icon = iconKey ? SOCIAL_ICON_MAP[iconKey] : null; 


  if (props.type === "nav") {
    const { item, activePage, handleNavClick } = props;
    const mobileClasses = "text-xl text-white font-sans italic hover:text-gold-400 transition-colors block"; 
    const desktopClasses = `text-sm font-bold uppercase tracking-widest transition-colors relative whitespace-nowrap after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full ${activePage === item.id ? "text-gold-400 after:w-full" : "text-gray-300 hover:text-gold-400 after:w-0"}`;

    return (
      <button 
        onClick={() => handleNavClick(item.id)} 
        className={`${isMobile ? mobileClasses : desktopClasses} ${className || ''}`}
      >
        {item.label}
      </button>
    );
  }

  if (props.type === "social") {
    const { link } = props;
    
    if (!Icon) return null; 

    const baseClasses = isMobile ? 'text-4xl text-white' : 'text-white  transition-colors';
    
    const size = isMobile ? 30 : 20;

    return (
      <a 
        href={link.href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${className || baseClasses} ${link.hover || ''}`}
      >
        <Icon 
          size={size} 
          width={size} 
          height={size} 
        /> 
      </a>
    );
  }
  
  return null;
}

export default NavLink;