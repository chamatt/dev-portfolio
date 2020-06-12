import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl sm:text-3xl uppercase tracking-wider mb-0 leading-none">
        {title}
      </h2>
      <h2 className="text-5xl sm:text-6xl uppercase font-bold leading-none">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
