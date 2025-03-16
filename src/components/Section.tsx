import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="text-blue-400">{icon}</div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;