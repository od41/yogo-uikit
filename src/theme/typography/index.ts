const base = {
  fontSize: "14px",
  color: 'black.100',
  fontWeight: 'normal',
  _dark: {
    color: 'gray.l80',
  }
}

export const textStyles = {
  base: base,
  h1: {
    // you can also use responsive styles
    ...base,
    color: "black.100",
    fontSize: "48px",
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    ...base,
    color: "black.100",
    fontSize: "24px",
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h3: {
    ...base,
    color: "black.100",
    fontSize: "18px",
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  small: {
    fontSize: "sm",
    color: "black.40",
    _dark: {
      color: 'gray.l40',
    }
  }
};