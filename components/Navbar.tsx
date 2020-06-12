import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="w-full py-12 hidden sm:flex">
        <ul className="flex items-center">
          {["Projects", "Contact", "Technologies", "Blog"].map(
            (item: string, index: number) => {
              return (
                <li key={item} className="text-xl font-bold ">
                  {index >= 1 && <span className="mx-3">●</span>}
                  <span className="pb-2 border-b-2 border-transparent hover:border-black cursor-pointer transition ease-in-out duration-200">
                    {item}
                  </span>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="m-4">
        <div className="sm:hidden fixed top-0 right-0 m-2 p-2 z-10 cursor-pointer dark:filter-invert">
          <img src={require("../assets/menu-icon.svg")} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
