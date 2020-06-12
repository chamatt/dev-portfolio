import classNames from "classnames";

interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  size?: "small" | "normal" | "big";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  size = "normal",
  children,
}) => {
  return (
    <button
      className={classNames(
        "text-white font-bold font-display py-2 px-4 uppercase flex justify-center items-center",
        {
          "bg-purple-700 hover:bg-purple-500": variant === "primary",
          "bg-gray-900 hover:bg-gray-700 dark:bg-white dark:bg-gray-200 dark:text-gray-800":
            variant === "secondary",
          "xs:text-lg md:text-xl lg:text-2xl": size === "big",
          "xs:text-md md:text-lg lg:text-xl": size === "normal",
          "xs:text-sm md:text-md lg:text-lg": size === "small",
          [className]: className,
        }
      )}
    >
      {children}
    </button>
  );
};
