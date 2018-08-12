import styled from 'styled-components'

const ColorPalette = styled.div`
  height: 100px;
  display: flex;

  &:empty {
    display: none;
  }
`

ColorPalette.Swatch = styled.div`
  flex: 1;
  background: ${p => p.value};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${p => p.color};
  transition: 0.3s all;

  code {
    font-size: 15px;
    background: none;
  }

  &:hover {
    flex-grow: ${p => p.main ? `4` : `4`};
  }
`

export default ColorPalette
