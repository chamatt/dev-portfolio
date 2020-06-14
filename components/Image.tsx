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
      className="w-full hover:shadow-lg relative"
      style={{
        paddingTop: "100%",
        background: `radial-gradient(#bbb9, #eee9)`,
      }}
      {...containerProps}
    >
      <img className="absolute top-0 left-0" src={path} {...imgProps} />
    </div>
  );
};

export default Image;
