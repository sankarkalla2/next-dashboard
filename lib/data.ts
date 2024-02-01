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
    id: "4",
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
    id: "5",

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
    id: "^",
    category: "bussiness",
    Date: "20 sep 22",
    author: "sankar kalla",
    title: "7 Rules of Effecive Branding",
    description: "Why branding matters for your Bussiness",
    tags: ["Branding", "communication", "Figma"],
    status: "Published",
    imgUrl: "/top-articles/pexels-anna-nekrashevich-6802042.jpg",
  },
];

export const topStories = [
  {
    id: "1",
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
    author: "Weeknd",
  },
  {
    id: "2",

    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
    author: "Zenituse",
  },
  {
    id: "3",
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
    author: "Obanai Iguro",
  },
  {
    id: "4",
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
    author: "Ayanakoji",
  },
  {
    id: "5",
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
    author: "Tomiaka Giyu",
  },
];

export const advertisements = [
  {
    title: "Build Your Bussiness",
    description: "shofijaf ljfiaji iojfioal kjflroe lkjfoiaj lkjfoiaj ",
    imgUrl: "/public/advertisements/pexels-artem-podrez-5726837.jpg",
  },
  {
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/public/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
  },
  {
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "/public/top-stories/pexels-anna-nekrashevich-6802042.jpg",
    status: "created",
  },
];
