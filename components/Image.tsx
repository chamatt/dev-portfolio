import React from "react";

import { useImage } from "react-image";
import { GetStaticProps } from "next";

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
  // const { src } = useImage({
  //   srcList: [require(`../assets/${path}`)],
  //   useSuspense: false,
  // });

  return (
    <div
      className="w-full relative"
      style={{
        paddingTop: "100%",
        background: `radial-gradient(#bbb9, #eee9)`,
      }}
      {...containerProps}
    >
      <img
        alt=""
        className="absolute top-0 left-0 h-full object-cover"
        src={path}
        {...imgProps}
      />
    </div>
  );
};

export default Image;
