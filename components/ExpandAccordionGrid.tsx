import React, { useMemo, useState, useEffect } from "react";
import useMedia from "../hooks/useMedia";
import classNames from "classnames";
import { AiFillCaretDown } from "react-icons/ai";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItem = {
  id: any;
  logo: string;
  cover: string;
  project: string;
  about?: string;
  me?: string;
  tags?: string;
  website?: string;
};

interface ExpandAccordionGridProps {
  items?: AccordionItem[];
}

const mock = [
  {
    id: "globalhawk",
    logo: "/img/globalhawk.svg",
    cover: "/img/globalhawk-website.jpg",
    project: "Global Hawk",
    about:
      "Global Hawk is a platform for top level realtors to sell luxury homes with the lastest and most advanced 3D visualization tools",
    me:
      "My part in this project was working on the front-end web application, using React.",
    tags: "Front-end,React,API,Styled Components,Authentication",
    website: "https://globalhawk.co",
  },
  {
    id: "descola",
    logo: "/img/descola.svg",
    cover: "/img/descola-website.jpg",
    project: "Descola",
    about: "Descola is a brazilian online course platform.",
    me:
      "The company wanted to revamp it's website, using cutting edge technologies. So we rebuilt it using React and Node.js. I was part of the front-end team, using React and Redux. One particular challenge we ran into while building this platform, was taking care of the SEO and keeping it as a SPA. We solved it by using prerendering, and managed to get a perfect social sharing SEO on a SPA.",
    tags: "Front-end,React,Redux,Netlify,Pre-rendering",
    website: "https://staging.descola.co",
  },
  {
    id: "tollbrothers",
    logo: "/img/tollbrothers.svg",
    cover: "/img/tollbrothers-website.jpg",
    project: "Toll Brothers Kitchen Visualizer",
    about:
      "Kitchen Visualizer is a tool designed to help you create your dream Kitchen by visualizing and choosing materials and colors to best suit your style. The kitchens represented in this tool are based upon actual Toll Brothers architectural designs.",
    me: "I worked on the React front-end and on the Firebase backend.",
    tags: "Fullstack,React,Redux,Firebase",
    website: "https://kv.tollbrothers.com",
  },
  {
    id: "provem",
    logo: "/img/provem.svg",
    cover: "/img/provem-website.png",
    project: "Provem Eventos",
    about:
      "Provem is an e-commerce platform with the primary goal of selling Events tickets (along with hotel reservations, transport, and party bundles).",
    me:
      "My part in this project was building the entire front-end application as a PWA, using React, Redux.",
    tags: "Front-end,PWA,React,Redux,API",
  },
  {
    id: "primadeck",
    logo: "/img/primadeck.svg",
    cover: "/img/primadeck-website.jpg",
    project: "Primadeck",
    about:
      "Primadeck is a platform for live presentations that thrives in keeping your public engaged.",
    me:
      "I was responsible for the Stripe integration on both the backend and the frontend, using the Amplify stack. For the backend, I used a serverless stack with AWS Lambda, and on the front-end I used React + GraphQL (from Amplify). I was also responsible for implementing the comment section with real-time update subscriptions.",
    tags:
      "Stripe Integration,Front-end,React,Back-end,Amplify,GraphQL,Real-time",
    website: "https://primadeck.com",
  },
  {
    id: "ketchapp",
    logo: "/img/ketchapp.svg",
    cover: "/img/ketchapp-website.jpg",
    project: "Ketchapp",
    about:
      "Ketchapp is a pioneer restaurant app for clients to use on the table, and be able to get service without the need for a waiter to take their request. Users can share their expenses and pay their meals directly from the app.",
    me:
      "I was responsible to build the entire PWA application with React, using Firebase as a backend, and Wirecard as payment processor.",
    tags: "Fullstack,PWA,React,Redux,Firebase,Payment Integration,Wirecard",
    website: "https://www.ketchapp.com.br/site/",
  },
  {
    id: "nextly",
    logo: "/img/nextly.svg",
    cover: "/img/nextly-website.jpg",
    project: "Nextly.team",
    about:
      "Nextly.team is the American-focused branch of the software-house company I currently work for.",
    me:
      "My goal on the team is to build high quality front-end application using React and React Native. I also work on the back-end using Node.js.",
    tags: "Front-end,Back-end,React,React Native,Node.js,Typescript",
    website: "https://nextly.team",
  },
  {
    id: "anago",
    logo: "/img/anago.svg",
    cover: "/img/anago.svg",
    project: "Anago Cleaning Systems",
    about:
      "Anago Cleaning Systems is a commercial cleaning company. This company was in need of an enterprise software for their cleaning experts to use onsite.",
    me:
      "My part in this project was working on the front-end web application, using React. As it was an internal application, I can't share the link.",
    tags: "Front-end,React",
  },
];

interface ExpandProps {
  isOpen?: boolean;
  item: AccordionItem;
}

const Expand: React.FC<ExpandProps> = ({
  isOpen = false,
  item: { cover, about, me, website, project, tags },
}) => {
  const tagList = useMemo(() => {
    if (!tags) return [];
    return tags.split(",").map((s) => s.trim());
  }, [tags]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="py-4 col-span-12"
        >
          <div className="z-10 col-span-12 w-full grid grid-cols-2 shadow-lg rounded-md">
            <div
              className="col-span-2 sm:col-span-1 bg-white"
              style={{ height: "100%" }}
            >
              <img
                src={cover}
                className="object-center w-full h-full object-cover"
                alt={project}
              />
            </div>
            <div className="col-span-2 sm:col-span-1 w-full bg-default p-6">
              <h2 className="text-3xl font-bold pb-2">{project}</h2>
              <p className="pb-2 text-lg">{about}</p>
              <p className="pb-2 text-lg">{me}</p>
              <div className="pt-4">
                {tagList.map((text) => (
                  <Badge key={text} text={text} />
                ))}
              </div>
              {website && (
                <Button
                  as="a"
                  href={website}
                  variant="secondary"
                  className="w-full mb-2 mt-6"
                  size="small"
                >
                  Go to website
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Badge = ({ text }) => (
  <span className="inline-block rounded-full text-white bg-purple-600 dark:bg-purple-800 px-4 py-2 text-sm font-bold mr-3 my-2">
    {text}
  </span>
);

const SelectedBadge = () => {
  return (
    <div className="w-full flex items-center justify-center w-12 absolute bottom-0 text-gray-800 dark:text-white">
      <AiFillCaretDown size={16} className="fill-current" />
    </div>
  );
};

const ExpandAccordionGrid: React.FC<ExpandAccordionGridProps> = ({
  items = mock,
}) => {
  const columnCount = useMedia(
    [
      "(min-width: 1280px)",
      "(min-width: 1024px)",
      "(min-width: 768px)",
      "(min-width: 640px)",
    ],
    [4, 4, 3, 2],
    2
  );
  const [colSpan, setColSpan] = useState(`col-span-${12 / 2}`);
  useEffect(() => {
    setColSpan(`col-span-${12 / columnCount}`);
  }, [columnCount]);

  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(
    null
  );
  const handleSelect = (index: number) => {
    const selected = items[index];
    if (selected?.id === selectedItem?.id) setSelectedItem(null);
    else setSelectedItem(selected);
  };

  const shouldShowExpand = (selected: typeof items[0]) => {
    const foundIndex = items.findIndex(
      (v: typeof items[0]) => v?.id === selected?.id
    );
    const nextMultiple =
      foundIndex + (columnCount - (foundIndex % columnCount));
    return nextMultiple - 1;
  };

  return (
    <>
      <motion.div className="grid grid-cols-12 col-gap-1 box-border">
        {items.map(({ id, logo, project }, i) => {
          return (
            <React.Fragment key={id}>
              <motion.div
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className={classNames(
                  "w-full h-32 p-4 flex items-center justify-center relative cursor-pointer",
                  {
                    [colSpan]: true,
                    "shadow-2xl bg-default": selectedItem?.id === id,
                    "bg-accent": selectedItem?.id !== id,
                  }
                )}
                onClick={() => handleSelect(i)}
              >
                <img
                  src={logo}
                  className="object-contain w-full h-full p-2 sm:p-4 dark:filter-invert"
                  alt={project}
                />
                {selectedItem?.id === id && <SelectedBadge />}
              </motion.div>
              {/* {selectedItem && shouldShowExpand(selectedItem) === i && ( */}
              <Expand
                isOpen={selectedItem && shouldShowExpand(selectedItem) === i}
                item={selectedItem || ({} as AccordionItem)}
              />
              {/* )} */}
            </React.Fragment>
          );
        })}
      </motion.div>
    </>
  );
};

export default ExpandAccordionGrid;
