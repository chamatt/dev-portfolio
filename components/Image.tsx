import React from "react";

import { useImage } from "react-image";

interface Props {
  path: string;
  containerProps?: any;
  imgProps?: any;
}
const Image: React.FC<Props> = ({
  path,
  containerProps = {},
  imgProps = {},
}) => {
  const { src, isLoading } = useImage({
    srcList: [require(`../assets/${path}`)],
    useSuspense: false,
  });

  return (
    <div
      className="w-full hover:shadow-lg"
      style={{
        backgroundImage: `url(${require(`../assets/${path}?lqip`)})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...(isLoading ? { width: "100%", paddingBottom: "100%" } : {}),
      }}
      {...containerProps}
    >
      {!isLoading && <img src={src} {...imgProps} />}
    </div>
  );
};

export default Image;
