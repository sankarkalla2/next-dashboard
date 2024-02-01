import { DashboardIcon } from "@radix-ui/react-icons";
import {
  AppWindow,
  Contact,
  Gamepad,
  LayoutDashboard,
  LayoutDashboardIcon,
  MedalIcon,
  MessageCircle,
  MoveDiagonal,
  Settings2,
  StoreIcon,
  Users,
} from "lucide-react";

export const dashBoardRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    notifications: 0,
  },
  {
    label: "Content",
    icon: Contact,
    href: "/content",
    notifications: 0,
  },
  {
    label: "Users",
    icon: Users,
    href: "/teams",
    notifications: 3,
  },
  {
    label: "App/Web",
    icon: AppWindow,
    href: "/appweb",
    notifications: 0,
  },
  {
    label: "Analytics",
    icon: LayoutDashboard,
    href: "/analytics",

    notifications: 3,
  },

  {
    label: "Media",
    icon: MedalIcon,
    href: "/media",

    notifications: 0,
  },
  {
    label: "Notifications",
    icon: MessageCircle,
    href: "/notificatons",
    notifications: 0,
  },
  {
    label: "Settings",
    icon: Settings2,
    href: "/settings",
    notifications: 0,
  },
];

export const categorieItems = [
  {
    name: "Articles",
    noOfUpdates: 2234,
    icon: MoveDiagonal,
  },
  {
    name: "Stories",
    noOfUpdates: 1533,
    icon: Gamepad,
  },
  {
    name: "Categories",
    noOfUpdates: 10024,
    icon: LayoutDashboardIcon,
  },
  {
    name: "Advertisements",
    noOfUpdates: 56,
    icon: StoreIcon,
  },
];

export const topArticles = [
  {
    id: "1",
    category: "bussiness",
    Date: "20 sep 22",
    author: "sankar kalla",
    title: "7 Rules of Effecive Branding",
    description: "Why branding matters for your Bussiness",
    tags: ["Branding", "communication", "Figma"],
    status: "Published",
    imgUrl: "/top-articles/pexels-anna-nekrashevich-6802042.jpg",
  },
  {
    id: "2",
    category: "Politics",
    Date: "20 jan 24",
    author: "Zenituse",
    title: "What's goint on in indian",
    description: "Why branding matters for your Bussiness",
    tags: ["communication", "Politics"],
    status: "Published",
    imgUrl: "/top-articles/pexels-christina-morillo-1181675.jpg",
  },
  {
    id: "4",
    category: "Filming",
    Date: "20 sep 22",
    author: "Iguro Obanai",
    title: "How to improve critical thinking",
    description: "Why branding matters for your Bussiness",
    tags: ["Branding", "communication", "Figma"],
    status: "Created",
    imgUrl: "/top-articles/pexels-karolina-grabowska-4386367.jpg",
  },
  {
    id: "5",

    category: "Filiming",
    Date: "19 aug 24",
    author: "sankar kalla",
    title: "Top 10 movies to watch in Jan",
    description: "Why branding matters for your Bussiness",
    tags: ["Branding", "communication", "Figma"],
    status: "Published",
    imgUrl: "/top-articles/pexels-leeloo-the-first-8919505.jpg",
  },
  {
    id: "6",
    category: "Computer Science",
    Date: "20 sep 22",
    author: "sankar kalla",
    title: "Top 10 trending technologies in 2024",
    description: "Why branding matters for your Bussiness",
    tags: ["Branding", "communication", "Figma"],
    status: "Published",
    imgUrl: "/top-articles/pexels-mati-mango-5952738.jpg",
  },
];

export const topStories = [
  {
    id: "1",
    title: "How to get placed in this economy",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "Created",
    author: "Weeknd",
    showCaseImgs: [
      "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
      "/top-stories/pexels-artem-podrez-5726837.jpg",
      "/pexels-mati-mango-5952738.jpg",
    ],
  },
  {
    id: "2",

    title: "How reach 2000 elo in chess.",
    category: "bussiness",
    views: "334",
    date: "20 jan 23",
    imgUrl: "/top-stories/pexels-artem-podrez-5726837.jpg",
    status: "Published",
    author: "Iguro Obanai",
    showCaseImgs: [
      "/top-stories/pexels-artem-podrez-5726837.jpg",
      "/advertisements/pexels-google-deepmind-17483848.jpg",
    ],
  },
  {
    id: "3",
    title: "This to consider while learning to code",
    category: "Computer Science",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-christina-morillo-1181675.jpg",
    status: "Created",
    author: "Obanai Iguro",
    showCaseImgs: [
      "/top-stories/pexels-christina-morillo-1181675.jpg",
      "/top-articles/pexels-mati-mango-5952738.jpg",
    ],
  },
  {
    id: "4",
    title: "Why some many people lacgging",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-dom-j-45111.jpg",
    status: "Published",
    author: "Ayanakoji",
    showCaseImgs: [
      "/top-stories/pexels-dom-j-45111.jpg",
      "/top-articles/pexels-karolina-grabowska-4386367.jpg",
      "/advertisements/pexels-mati-mango-5952738.jpg",
    ],
  },
  {
    id: "5",
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-karolina-grabowska-4386367.jpg",
    status: "created",
    author: "Tomiaka Giyu",
    showCaseImgs: [
      "/top-stories/pexels-karolina-grabowska-4386367.jpg",
      "/top-articles/pexels-leeloo-the-first-8919505.jpg",
      "/top-stories/pexels-artem-podrez-5726837.jpg",
    ],
  },
];

export const advertisements = [
  {
    id: "1",
    title: "Prepare for interview with geeks",
    description: "shofijaf ljfiaji iojfioal kjflroe lkjfoiaj lkjfoiaj ",
    imgUrl: "/advertisements/pexels-artem-podrez-5726837.jpg",
  },
  {
    id: "2",
    title: "Hurry up!lets do drink some cola",
    description: "shofijaf ljfiaji iojfioal kjflroe lkjfoiaj lkjfoiaj ",
    imgUrl: "/advertisements/pexels-google-deepmind-17483848.jpg",
  },
  {
    id: "3",
    title: "Build Your Bussiness",
    description: "shofijaf ljfiaji iojfioal kjflroe lkjfoiaj lkjfoiaj ",
    imgUrl: "/advertisements/pexels-jose-francisco-fernandez-saura-802024.jpg",
  },
];
