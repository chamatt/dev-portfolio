import React from "react";

// import { Container } from './styles';

const FooterCredits: React.FC = () => {
  return (
    <div className="w-full text-gray-700 dark:text-gray-500 text-lg text-center py-4 bg-accent">
      <p>
        Made with
        <img
          alt="❤️"
          draggable="false"
          src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          className="h-4 w-4 inline mx-2"
        />
        by Matheus Vicente
      </p>
    </div>
  );
};

export default FooterCredits;
