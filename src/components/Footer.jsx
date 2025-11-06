import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Shoaib552", icon: <FaGithub /> },
  { href: "https://www.instagram.com/shoaib5521/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/in/shoaib-k-4b441a23a/?trk=opento_sprofile_topcard", icon: <FaLinkedin /> },
  { href: "https://youtube.com", icon: <FaYoutube /> }, // optional — remove if you don’t want YouTube
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © 2025 SHOAIB FITNESS. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl transition-transform duration-300 ease-in-out hover:scale-125 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
