import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleLink = defineStyle({
  px: "2",
  py: "1",
  color: "#949597",
  rounded: "md",

  _activeLink: {
    color: "#1C1C1C"
  },
  
  _hover: {
    textDecoration: "none",
    bg: "#f2f2f2",
  },
})

const baseStyleSeparator = defineStyle({
  color: "#949597",
})

const baseStyle = definePartsStyle({
  link: baseStyleLink,
  separator: baseStyleSeparator,
})

export const breadcrumbTheme = defineMultiStyleConfig({
  baseStyle,
})