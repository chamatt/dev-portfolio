import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

interface InputProps {
  label: string;
  error?: string;
  name: string;
  as?: React.ReactType;
  appearance?: "default" | "accent";
}

const Input: React.FC<
  InputProps &
    InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  label,
  error,
  name,
  as = "input",
  className,
  appearance = "default",
  ...inputProps
}) => {
  const Component: React.ReactType = as as React.ReactType;
  return (
    <div className="w-full mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <Component
        className={classNames(
          "appearance-none block w-full bg-default text-gray-700 dark:text-white rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-700 border-2 border-transparent focus:-m-2 focus:border-purple-500",
          {
            "bg-default": appearance === "default",
            "bg-accent": appearance === "accent",
            [className]: className,
            "border border-red-500": !!error,
            "resize-none": as === "textarea",
          }
        )}
        id={name}
        type="text"
        name={name}
        {...inputProps}
      />

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-red-500 text-xs italic">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-2"></div>
    </div>
  );
};

export default Input;
