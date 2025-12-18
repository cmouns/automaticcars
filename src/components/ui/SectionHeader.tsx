import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="h-[2px] bg-gold-500 flex-1"></div>
    <h3 className="text-gold-500 text-xl uppercase whitespace-nowrap">
      {title}
    </h3>
    <div className="h-[2px] bg-gold-500 flex-1"></div>
  </div>
);