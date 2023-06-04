import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

  const filled = definePartsStyle({
    field: {
      color: 'gray.80',
      background: 'gray.5',
      pl: 2,

      _placeholder: {
        color: "gray.20"
      },
      
      _dark: {
        background: 'gray.l10',
        color: 'gray.l80',

        _placeholder: {
          color: "gray.l40"
        },
      },
    },
    addon: {
      background: 'gray.5',
      borderRadius: 'lg',
      color: 'gray.l20',
      px: 2,
  
      _dark: {
        background: 'gray.l10',
        color: 'gray.l40',
      },
    },
  })

  const customOutline = definePartsStyle({
    field: {
      color: 'gray.80',
      background: 'white',
      pl: 2,
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'gray.10',

      _placeholder: {
        color: "gray.20"
      },
      
      _dark: {
        background: 'gray.l5',
        color: 'gray.l80',
        borderColor: 'gray.l20',

        _placeholder: {
          color: "gray.l40"
        },
      },
    },
    addon: {
      background: 'white',
      borderRadius: 'lg',
      color: 'gray.l20',
      px: 2,
      borderLeft: '1px solid',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderRight: '1px solid',
      borderColor: 'gray.10',
  
      _dark: {
        background: 'gray.l5',
        color: 'gray.l40',
        borderColor: 'gray.l20',
      },
    },
  })

const baseStyle = definePartsStyle({
  field: {
    bg: 'gray.5',
    color: 'red',
    borderRadius: 'lg',
    px: 2,

    _placeholder: {
      color: "gray.20"
    },
    
    _dark: {
      bg: 'gray.l5',
    },
  },
  addon: {
    bg: 'yellow',
    borderRadius: 'lg',
    color: 'gray.5',
    px: 2,

    _dark: {
      bg: 'gray.l5',
      color: 'white',
    },
  },
  element: {
    bg: 'yellow',
    borderRadius: 'lg',
    color: 'gray.5',
    px: 2,

    _dark: {
      bg: 'gray.l5',
      color: 'white',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: { size: "sm", },
  variants: { 
    filled,
    customOutline,
  },
});