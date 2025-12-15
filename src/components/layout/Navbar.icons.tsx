import React from "react";

interface IconProps {
  className?: string;
}

// Icon Tiktok
export const TiktokIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="22"
    height="22"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

// Icon Snapchat
export const SnapchatIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    className={className}
    width="22"
    height="22"
  >
    <path
      d="m24.0116,42.2697c3.8272-.0024,4.9669-1.6066,7.486-2.7237,2.2497-.9976,5.4694.5087,6.1373-2.1616h0c.0865-1.3801,2.513-1.1579,3.8742-2.0996,1.2418-.8591,1.3659-2.2361.0902-2.778-2.8877-1.2269-5.9232-3.9144-6.6578-6.7964-.4582-1.7978,5.2788-2.3506,4.0841-5.7402-.7049-2.0001-3.2379-1.2958-4.616-.8478.9182-7.1086-2.542-13.3923-10.4098-13.3923s-11.328,6.2837-10.4098,13.3923c-1.378-.448-3.911-1.1523-4.616.8478-1.1947,3.3896,4.5424,3.9424,4.0841,5.7402-.7346,2.882-3.77,5.5695-6.6578,6.7964-1.2757.542-1.1516,1.9189.0902,2.778,1.3612.9417,3.7878.7195,3.8742,2.0996h0c.6679,2.6703,3.8876,1.164,6.1373,2.1616,2.5191,1.1171,3.6588,2.7213,7.486,2.7237.0058,0,.0173,0,.0231,0Z"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon Instagram
export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width="22"
    height="22"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
