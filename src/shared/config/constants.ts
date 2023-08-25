import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Lifesmile.ae",
    description:
      "Complete Ecommerce website using nextjs, typescript, redux, and more. Also, Mobile app using react native that is connected with the website. And, a complete ERP system using expressjs, prisma, and more.",
    tech: ["NextJs", "ExpressJs", "Prisma", "TypeScript"],
    code: "https://www.lifesmile.ae/",
    live: "https://www.lifesmile.ae/",
    thumbnail: "lifesmile.png",
    featured: true,
  },
  {
    title: "Lifesmile Mobile APP",
    description:
      "Complete Ecommerce mobile app using react native with expo and typescript. MultiLanguage support, RTL support, and more.",
    tech: ["React Native", "Expo", "Nativewind", "TypeScript"],
    code: "https://apps.apple.com/us/app/lifesmile-ae/id6444078111",
    live: "https://apps.apple.com/us/app/lifesmile-ae/id6444078111",
    thumbnail: "app_image.png",
    featured: true,
  },

  {
    title: "Phytomed Nepal",
    description:
      "The largest chemical database where you can find all about diseases, their symptoms and its natural herbal remedies with chemical demonstration of those remedies",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://www.phytomednepal.com/",
    live: "https://www.phytomednepal.com/",
    thumbnail: "phytomed.png",
    featured: true,
  },

  {
    title: "X-Beat Store",
    description:
      "A music store website where you can buy musical instruments and accessories.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/besal101",
    live: "https://xbeat-stable.netlify.app/",
    thumbnail: "x-beat.png",
    featured: false,
  },

  {
    title: "nLog Blog",
    description:
      "A blog website which is a democratic platform to write anti-political stuffs. ",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/besal101",
    live: "https://9t5-nlog-blogs-client.vercel.app/",
    thumbnail: "nLog.png",
    featured: false,
  },

  {
    title: "Canim Blog",
    description:
      "A blog website where you can read blogs, write blogs, comment on blogs, like blogs, and share blogs.",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://github.com/besal101",
    live: "https://nurui-csr.vercel.app/",
    thumbnail: "canim-blog.png",
  },
];
