import React from "react";

// import { Container } from './styles';

const MovingBall: React.FC = () => {
  return (
    <>
      <div
        className="style_goodDot style_neutralDot"
        style={{
          left: "50%",
          top: "50%",
          height: "6em",
          width: "6em",
          zIndex: 100,
          opacity: "76%",
        }}
      />

      <style jsx>{`
        .style_goodDot {
          background: black;
          background: linear-gradient(blue, yellow);
        }
        .style_neutralDot {
          position: absolute;
          border-radius: 1000px;
          -webkit-animation: style_move 2s ease-in-out infinite alternate;
          animation: style_move 2s ease-in-out infinite alternate;
          z-index: -1;
        }

        :root {
          --dato-gradient: linear-gradient(90deg, #ff593d, #ff7751);
          --box-shadow: 0 0.9px 2.2px rgba(0, 0, 0, 0.02),
            0 2.2px 5.3px rgba(0, 0, 0, 0.028),
            0 4.1px 10px rgba(0, 0, 0, 0.035),
            0 7.4px 17.9px rgba(0, 0, 0, 0.042),
            0 13.8px 33.4px rgba(0, 0, 0, 0.05), 0 33px 80px rgba(0, 0, 0, 0.07);
        }

        @-webkit-keyframes style_move {
          0% {
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
          }
          to {
            -webkit-transform: translateY(15px);
            transform: translateY(15px);
          }
        }
        @keyframes style_move {
          0% {
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
          }
          to {
            -webkit-transform: translateY(15px);
            transform: translateY(15px);
          }
        }
        .style_goodDot {
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#c3f4fa),
            to(#9be0e8)
          );
          background: #0af5f4;
        }
      `}</style>
    </>
  );
};

export default MovingBall;
