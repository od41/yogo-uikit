import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseIconButton = defineStyle({
  rounded: "full",
  h: "40px",
  w: "40px",
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  bg: "white",
  color: "black.100",
  _hover: {
    bg: "gray.5",
    cursor: "pointer",
  },
  _dark: {
    bg: "black.100",
    color: "white.100",
    _hover: {
      bg: "gray.l10",
      cursor: "pointer",
    },
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { baseIconButton },
});
