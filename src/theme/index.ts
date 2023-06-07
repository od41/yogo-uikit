import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { inputTheme } from './input'
import { breadcrumbTheme } from './breadcrumb'
import { cardTheme } from './card'
import { textStyles } from './typography'
import { buttonTheme } from './button'
import { tableTheme } from './tables'
import { badgeTheme } from './badge'
import { tabsTheme } from './tabs'
import { menuTheme } from './menu'
import { avatarTheme } from './avatar'
import { linkTheme } from './link'

// colors
const colors = {
  black: {
    100: "#1C1C1C",
    80: "#313232",
    40: "#949597",
    20: "#C6C7C9",
    10: "#E5E5E5",
    5: "#EBEDEF",
  },
  white: {
    100: "#ffffff",
    80: "#FDFEFE",
    40: "#FAFBFD",
    20: "#F9FAFC",
    10: "#F8FAFB",
    5: "#F8F9FB",
  },
  gray: {
    100: "#1C1C1C",
    80: "#333333",
    40: "#999999",
    20: "#CCCCCC",
    10: "#E5E5E5",
    5: "#F2F2F2",
    l80: "#D2D2D2",
    l40: "#777777",
    l20: "#494949",
    l10: "#333333",
    l5: "#272727",
  },
  brand: {
    primary: {
      alpha: "#1C1C1C",
      80: "#313232",
      40: "#949597",
      20: "#C6C7C9",
      10: "#E5E5E5",
      5: "#EBEDEF",
    },
    secondary: {
      alpha: "#1C1C1C",
      beta: "#E3F5FF",
      kappa: "#E5ECF6",
      kappa50: "#EEF3F9",
      echo: "#333333",
      f: "#95A4FC",
      g: "#C6C7F8",
      h: "#A8C5DA",
      i: "#B1E3FF",
      j: "#A1E3CB",
      k: "#BAEDBD",
    },
    alpha: "#F7F9FB",
    beta: "#E3F5FF",
    kappa: "#E5ECF6",
    kappa50: "#EEF3F9",
    echo: "#333333",
  },
};

// layout
// typography
// buttons
// input fields
// cards

// PAGES
// landing page
// login page
// register page
// dashboard page
// profile page
// settings page
// 404 page

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const components = {
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Card: cardTheme,
  Input: inputTheme,
  Menu: menuTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Link: linkTheme,
};


export const theme = extendTheme({
    config,
    colors,
    textStyles,
    components,
})