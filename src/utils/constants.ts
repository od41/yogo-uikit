import { StarIcon, UserProfileIcon, PieChartIcon, ChatIcon, NotebookIcon, ProjectsIcon } from "@root/components/base/Icons"

export const sidebarMenu = [
    {
        name: "Dashboards",
        icon: PieChartIcon,
        link: "/zzzz",
        submenu: [
            {
                name: "Overview",
                icon: null,
                link: "/overview",
            },
            {
                name: "Projects",
                icon: null,
                link: "/projects",
            },
        ]
    },
    {
        name: "Projects",
        icon: ProjectsIcon,
        link: "/user-profile",
        submenu: [
            {
                name: "Campaigns",
                icon: null,
                link: "/campaigns",
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