import classNames from "classnames";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  size?: "small" | "normal" | "big";
  as?: React.ReactType;
}

export const Button: React.FC<
  ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  variant = "primary",
  className,
  size = "normal",
  children,
  as = "button",
  disabled,
  ...props
}) => {
  const Component: React.ReactType = as as React.ReactType;
  return (
    <Component
      className={classNames(
        "text-white font-bold font-display py-2 px-4 uppercase flex justify-center items-center ",
        {
          "transition duration-200 ease-in-out transform hover:-translate-y-1": !disabled,
          "bg-purple-700 hover:bg-white dark:hover:bg-transparent border-2 border-transparent hover:border-purple-500 hover:text-purple-500":
            variant === "primary" && !disabled,
          "bg-darkgray border-2 border-transparent hover:bg-transparent hover:border-darkgray hover:text-darkgray dark:hover:border-white dark:hover:text-white dark:bg-white dark:text-gray-800 dark:hover:bg-transparent":
            variant === "secondary" && !disabled,
          "xs:text-lg md:text-xl lg:text-2xl": size === "big",
          "xs:text-md md:text-lg lg:text-xl": size === "normal",
          "text-sm sm:text-md lg:text-lg": size === "small",
          [className]: className,
          "bg-gray-500 dark:bg-gray-500 dark:text-gray-800 cursor-not-allowed ": disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};
