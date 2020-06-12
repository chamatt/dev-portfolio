import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full py-12 hidden sm:flex">
      <ul className="flex items-center">
        {["Projects", "Contact", "Technologies", "Blog"].map(
          (item: string, index: number) => {
            return (
              <li key={item} className="text-xl font-bold">
                {index >= 1 && <span className="mx-3">●</span>}
                <span className="pb-2 border-b-2 border-transparent hover:border-black cursor-pointer">
                  {item}
                </span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Navbar;
