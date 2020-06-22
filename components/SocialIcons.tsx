import attributes from "../content/landing/profile.yml";
import {
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import { IconBaseProps } from "react-icons";

export const SocialIcons = [
  {
    icon: FaGithub,
    color: "#333",
    link: attributes.github,
    name: "github profile",
  },
  {
    icon: FaLinkedinIn,
    color: "#0e76a8",
    link: attributes.linkedin,
    name: "linkedin profile",
  },
  {
    icon: FaEnvelope,
    color: "#ea4335",
    link: `mailto:${attributes.email}`,
    name: "email address",
  },
];

interface SocialButtonProps {
  size: number;
  icon: React.ReactType;
  link: string;
  name: string;
}

export const SocialButton: React.FC<IconBaseProps & SocialButtonProps> = ({
  size = 16,
  icon,
  color,
  link,
  name,
  ...iconProps
}) => {
  const Component: React.ReactType = icon;
  return (
    <a
      aria-label={name || "profile"}
      href={link}
      className="rounded-full text-white flex items-center justify-center p-1"
      style={{ backgroundColor: color, width: size, height: size }}
    >
      <Component size={Math.ceil(size * (7 / 12))} {...iconProps} />
    </a>
  );
};
