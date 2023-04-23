import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { inputTheme } from './input'
import { breadcrumbTheme } from './breadcrumb'

// color mode

// colors
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


export const theme = extendTheme({
    config,
    components: { 
        Input: inputTheme,
        Breadcrumb: breadcrumbTheme
     },
})