import {
  UserProfileIcon,
  PieChartIcon,
  ChatIcon,
  NotebookIcon,
  ProjectsIcon,
} from "@/components/base/Icons";

export const sidebarMenu = [
  {
    name: "Dashboards",
    icon: PieChartIcon,
    link: "#dash",
    submenu: [
      {
        name: "Overview",
        icon: null,
        link: "#overview",
      },
      {
        name: "Reports",
        icon: null,
        link: "#reports",
      },
    ],
  },
  {
    name: "Projects",
    icon: ProjectsIcon,
    link: "#projects",
    submenu: [
      {
        name: "Overview",
        icon: null,
        link: "/projects",
      },
      {
        name: "Project Details",
        icon: null,
        link: "/projects/project-details",
      },
      {
        name: "Followers",
        icon: null,
        link: "#followers",
      },
    ],
  },
  {
    name: "Account",
    icon: UserProfileIcon,
    link: "#account",
    submenu: [
      {
        name: "Signin",
        icon: null,
        link: "/signin",
      },
      {
        name: "Forgot Password",
        icon: null,
        link: "/forgot-password",
      },
      {
        name: "Create New Password",
        icon: null,
        link: "/forgot-password/new-password",
      },
      {
        name: "Sign Up",
        icon: null,
        link: "/signup",
      },
      {
        name: "Onboarding",
        icon: null,
        link: "/signup/onboarding/1",
      },
    ],
  },
  {
    name: "Journal",
    icon: NotebookIcon,
    link: "#journal",
  },
  {
    name: "Chat",
    icon: ChatIcon,
    link: "#chat",
  },
];
