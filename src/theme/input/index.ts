import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

  const filled2 = definePartsStyle({
    field: {
      background: '#F2F2F2',
      borderRadius: 'lg',
      pl: "2",

      _placeholder: {
        color: "#C2C2C2"
      },
      
      _dark: {
        background: 'gray.800',
      },
    },
    addon: {
      background: '#F2F2F2',
      borderRadius: 'lg',
      color: '#F2F2F2',
      px: "2",
  
      _dark: {
        background: 'gray.800',
        color: 'white',
      },
    },
  })

const baseStyle = definePartsStyle({
  field: {
    
  },
});

export const inputTheme = defineMultiStyleConfig({
  defaultProps: { size: "sm", },
  variants: { filled: filled2 },
  baseStyle,
});