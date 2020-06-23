import classNames from "classnames";

interface Props {
  className?: string;
  as?: React.ReactType;
  id?: string;
}

const Container: React.FC<Props> = ({
  children,
  id,
  className,
  as = "div",
}) => {
  const Component: React.ReactType = as as React.ReactType;
  return (
    <Component
      id={id}
      className={classNames(
        "px-4 sm:px-8 container mx-auto sm:min-h-0 xl:max-width-none",
        { [className]: className }
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
