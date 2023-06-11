import { UserProfileIcon, PieChartIcon, ChatIcon, NotebookIcon, ProjectsIcon } from "@root/components/base/Icons"

export const sidebarMenu = [
    {
        name: "Dashboards",
        icon: PieChartIcon,
        link: "",
        submenu: [
            {
                name: "Overview",
                icon: null,
                link: "/overview",
            },
            {
                name: "Reports",
                icon: null,
                link: "/reports",
            },
        ]
    },
    {
        name: "Projects",
        icon: ProjectsIcon,
        link: "#",
        submenu: [
            {
                name: "Overview",
                icon: null,
                link: "/projects",
            },
            {
                name: "Documents",
                icon: null,
                link: "/documents",
            },
            {
                name: "Followers",
                icon: null,
                link: "/followers",
            }
        ]
    },
    {
        name: "Account",
        icon: UserProfileIcon,
        link: "/account",
    },
    {
        name: "Journal",
        icon: NotebookIcon,
        link: "/blog",
    },
    {
        name: "Chat",
        icon: ChatIcon,
        link: "/social",
    }
]