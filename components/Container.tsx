import classNames from "classnames";

interface Props {
  className?: string;
  as?: React.ReactType;
}

const Container: React.FC<Props> = ({ children, className, as = "div" }) => {
  const Component: React.ReactType = as as React.ReactType;
  return (
    <Component
      className={classNames(
        "px-4 sm:px-8 container mx-auto min-h-screen sm:min-h-0 xl:max-width-none",
        { [className]: className }
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
