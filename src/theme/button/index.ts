import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontSize: "14px",
  fontWeight: "normal",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
})

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


const solid = defineStyle({
  background: 'brand.primary.alpha',
  color: 'white',
  rounded: 'md',
  border: 'none',

  _hover: {
    background: 'brand.primary.80',
  },

  _dark: {
    background: 'brand.secondary.g',
    color: 'black.100',

    _hover: {
      background: 'brand.secondary.f',
    },
  }
})

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { baseIconButton, solid },
});
