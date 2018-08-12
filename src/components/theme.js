import COLORS from '@sproutsocial/seeds-color'

const theme = {
  breakpoints: [
    '544px',
    '768px',
    '1012px',
    '1280px'
  ],
  fonts: {
    0: '-apple-system, system-ui, BlinkMacSystemFont, sans-serif',
    mono: '"OperatorMono-Book", "SF Mono", "Roboto Mono", Menlo, monospace'
  },
  colors: {
    gray: COLORS.COLOR_NEUTRAL_100,
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
