import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    bg: 'gray.10',
    rounded: 'lg',

    _dark: {
        bg: 'gray.l5',
        color: 'white.40'
    }
  },
  header: {
    pb: '2px',
  },
  body: {
    pt: '2px',
  },
  footer: {
    pt: '2px',
  },
})

const highlights1Variant = definePartsStyle({
    container: {
      bg: 'brand.secondary.beta',

      _dark: {
        bg: 'brand.secondary.beta',
        color: 'brand.primary.alpha'

      }
    }
  })

  const highlights2Variant = definePartsStyle({
    container: {
      bg: 'brand.secondary.kappa',

      _dark: {
        bg: 'brand.secondary.kappa',
        color: 'brand.primary.alpha'

      }
    }
  })

  const filled = definePartsStyle({
    container: {
      bg: 'white.5',
    }
  })

export const cardTheme = defineMultiStyleConfig({ 
    baseStyle, 
    variants: {
        highlights1: highlights1Variant,
        highlights2: highlights2Variant,
        filled: filled,
    } 
});