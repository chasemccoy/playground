import COLORS from '@sproutsocial/seeds-color'

const theme = {
  breakpoints: [
    '544px',
    '768px',
    '1012px',
    '1280px'
  ],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  fonts: [
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
  ],
  lineHeight: 1.5,
  colors: {
    neutral: {
      0: COLORS.COLOR_NEUTRAL_0,
      100: COLORS.COLOR_NEUTRAL_100,
      200: COLORS.COLOR_NEUTRAL_200,
      300: COLORS.COLOR_NEUTRAL_300,
      400: COLORS.COLOR_NEUTRAL_400,
      500: COLORS.COLOR_NEUTRAL_500,
      600: COLORS.COLOR_NEUTRAL_600,
      700: COLORS.COLOR_NEUTRAL_700,
      800: COLORS.COLOR_NEUTRAL_800,
      900: COLORS.COLOR_NEUTRAL_900,
      1000: COLORS.COLOR_NEUTRAL_1000
    },
    green: {
      100: COLORS.COLOR_GREEN_100,
      200: COLORS.COLOR_GREEN_200,
      300: COLORS.COLOR_GREEN_300,
      400: COLORS.COLOR_GREEN_400,
      500: COLORS.COLOR_GREEN_500,
      600: COLORS.COLOR_GREEN_600,
      700: COLORS.COLOR_GREEN_700,
      800: COLORS.COLOR_GREEN_800,
      900: COLORS.COLOR_GREEN_900
    },
    red: {
      100: COLORS.COLOR_RED_100,
      200: COLORS.COLOR_RED_200,
      300: COLORS.COLOR_RED_300,
      400: COLORS.COLOR_RED_400,
      500: COLORS.COLOR_RED_500,
      600: COLORS.COLOR_RED_600,
      700: COLORS.COLOR_RED_700,
      800: COLORS.COLOR_RED_800,
      900: COLORS.COLOR_RED_900
    },
    blue: {
      100: COLORS.COLOR_BLUE_100,
      200: COLORS.COLOR_BLUE_200,
      300: COLORS.COLOR_BLUE_300,
      400: COLORS.COLOR_BLUE_400,
      500: COLORS.COLOR_BLUE_500,
      600: COLORS.COLOR_BLUE_600,
      700: COLORS.COLOR_BLUE_700,
      800: COLORS.COLOR_BLUE_800,
      900: COLORS.COLOR_BLUE_900
    }
  },
  radii: [ 0, 3, 6 ],
  space: [
    0,
    4,
    8,
    16,
    24,
    32,
    40,
    48
  ],
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    40,
    48
  ]
}

export default theme
