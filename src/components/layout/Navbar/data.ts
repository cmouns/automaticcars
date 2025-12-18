export interface NavItem {
  id: string;
  label: string;
}

export interface MobileMenuGroup {
  title: string;
  items: NavItem[];
}

export interface SocialLinkData {
  icon: 'Instagram' | 'Snapchat' | 'Tiktok';
  href: string;
  hover: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'ACCUEIL' },
  { id: 'reservation', label: 'RÉSERVATION' },
  { id: 'fleet', label: 'FLOTTE' },
  { id: 'lld', label: 'LLD' },
  { id: 'subscription', label: "L'ABONNEMENT" },
  { id: 'news', label: 'ACTUS' },
  { id: 'about', label: 'NOTRE PARCOURS' },
  { id: 'conditions', label: 'CONDITIONS' },
  { id: 'contact', label: 'CONTACT' },
];

export const NAV_GROUPS_MOBILE: MobileMenuGroup[] = [
    {
        title: "Nos Services",
        items: [
            { id: 'reservation', label: 'RÉSERVATION' },
            { id: 'fleet', label: 'FLOTTE' },
            { id: 'lld', label: 'LLD' },
            { id: 'subscription', label: "L'ABONNEMENT" },
        ]
    },
    {
        title: "Informations",
        items: [
            { id: 'news', label: 'ACTUS' },
            { id: 'about', label: 'NOTRE PARCOURS' },
            { id: 'contact', label: 'CONTACT' },
            { id: 'conditions', label: 'CONDITIONS' },
        ]
    }
];

export const SOCIAL_LINKS_DATA: SocialLinkData[] = [
  { icon: 'Instagram', href: "https://www.instagram.com/automaticcars33/", hover: "hover:text-[#C13584]" },
  { icon: 'Snapchat', href: "https://snapchat.com/t/JWaTeK5U", hover: "hover:text-gold-400" },
  { icon: 'Tiktok', href: "https://www.tiktok.com/@automaticcars33?_r=1&_t=ZN-92ElGDkQk1n", hover: "hover:text-white" },
];