import classNames from "classnames";

interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
}) => {
  return (
    <button
      className={classNames(
        "xs:text-lg md:text-xl lg:text-2xl text-white font-bold font-display py-2 px-4 uppercase flex justify-center items-center",
        {
          "bg-purple-700 hover:bg-purple-500": variant === "primary",
          "bg-gray-900 hover:bg-gray-700": variant === "secondary",
          [className]: className,
        }
      )}
    >
      {children}
    </button>
  );
};
