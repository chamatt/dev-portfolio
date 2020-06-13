import React from "react";
import classNames from "classnames";

interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, className }) => {
  return (
    <div
      className={classNames("flex flex-col", {
        [className]: className,
      })}
    >
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
