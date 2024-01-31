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
    label: "Contact",
    icon: Contact,
    href: "/contact",
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
    category: "bussiness",
    Date: "20 sep 22",
    author: "sankar kalla",
    title: "7 Rules of Effecive Branding",
    description: "Why branding matters for your Bussiness",
    tags: ["Branding", "communication", "Figma"],
    imgUrl: "something",
    
  },

];

export const topStories = [
  {
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "bussiness",
    views: "334",
    date: "20 sep 24",
    imgUrl: "",
    status: "created"
  },
];

export const advertisements = [
  {
    title: "Build Your Bussiness",
    description: "shofijaf ljfiaji iojfioal kjflroe lkjfoiaj lkjfoiaj ",
    imgUrl: "",
  },
];
