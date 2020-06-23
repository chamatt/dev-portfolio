import { useEffect } from "react";
import { Link, Events } from "react-scroll";

const Navbar: React.FC = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <div className="w-full py-12 hidden sm:flex items-center">
        <ul className="flex items-center">
          {[
            { label: "About Me", section: "about-me" },
            { label: "Projects", section: "personal-projects" },
            { label: "Experience", section: "professional-projects" },
            { label: "Blog", section: "blog-section" },
            { label: "Contact", section: "contact" },
          ].map((item, index: number) => {
            const { label, section } = item;
            return (
              <li
                key={label}
                className="text-xl font-bold flex items-center pb-2"
              >
                {index >= 1 && (
                  <span className="mx-3 text-sm select-none">●</span>
                )}

                <Link
                  to={section}
                  smooth={true}
                  offset={-50}
                  duration={500 + index * 200}
                  className="border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer transition ease-in-out duration-200"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="m-4">
        <div className="sm:hidden fixed top-0 right-0 m-2 p-2 z-10 cursor-pointer dark:filter-invert">
          <img alt="menu icon" src={require("../assets/menu-icon.svg")} />
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
