import React from 'react'
import Box from 'components/_Box'
import ColorPalette from 'components/_ColorPalette'
import ColorTokens from '@sproutsocial/seeds-color/dist/tokens.json'
import { groupArrayBy } from 'components/utils'
import tinycolor from 'tinycolor2';

const palettes = groupArrayBy(ColorTokens, 'category')

const Index = props => (
  <React.Fragment>
    {Object.keys(palettes).map((palette, i) =>
      <ColorPalette key={i}>
        {palettes[palette].map((token, j) =>
          !token.deprecated &&
          <ColorPalette.Swatch
            value={token.value.hex}
            color={tinycolor(token.value.hex).isDark() ? palettes[palette][2].value.hex : palettes[palette].slice(-3)[0].value.hex}
            main={token.app.includes('500')}
            key={j}
          >
            <code>{token.value.hex}</code>
          </ColorPalette.Swatch>
        )}
      </ColorPalette>
    )}
  </React.Fragment>
)

Index.defaultProps = {
  fullWidth: true
}

export default Index
