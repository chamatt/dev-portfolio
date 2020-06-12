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
        "text-white font-bold font-display py-2 px-4 uppercase flex justify-center items-center transition duration-200 ease-in-out",
        {
          "bg-purple-700 hover:bg-white dark:hover:bg-transparent border-2 border-transparent hover:border-purple-500 hover:text-purple-500":
            variant === "primary",
          "bg-gray-900 border-2 border-transparent hover:bg-transparent hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white dark:bg-white dark:text-gray-800 dark:hover:bg-transparent":
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
