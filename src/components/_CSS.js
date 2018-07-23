import React from 'react'
import styles from 'styles/index.scss'

const CSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css + styles
    }}
  />

CSS.defaultProps = {
  css: `
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.5;
    }
  `
}

export default CSS
