import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, StyleFunctionProps } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

// define a custom variant
export const filled = definePartsStyle((props) => {
  const { colorMode } = props

  return {
    table: {
      bg: "transparent",
    },
    thead: {
      color: "black.40",
      fontSize: "12px",
      bg: 'transparent',
      borderBottom: "1px solid",
      borderColor: "black.20",
      _dark: {

      }
    },
    th: {
      fontSize: "sm",
      color: "black.40",
      textTransform: "sentencecase",
      fontWeight: "normal",
      letterSpacing: "normal",
      _dark: {
        color: 'gray.l40',
      }
    },
    tbody: {
      width: "100%",
    },
    tr: {
      width: "100%",
    },
    td: {
      color: "black.100",
      fontSize: "14px",
      fontWeight: "normal",
    },
    tfoot: {},
  }
})

const variants = {
  filled,
}

export const tableTheme = defineMultiStyleConfig({ variants })
