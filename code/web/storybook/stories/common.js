// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'

// UI Imports
import * as colors from '../../src/ui/common/colors'
import * as fonts from '../../src/ui/common/fonts'

// Stories

// Colors
const colorsMap = Object.keys(colors).map(colorKey => (
  { name: colorKey, code: colors[colorKey] }
))
let colorStories = storiesOf('Common/Colors', module)
colorsMap.map(color => {
  colorStories.add(color.name, () => (
    <span style={{ color: color.code }}>{color.name} - {color.code}</span>
  ))
})

// Fonts
const fontsMap = Object.keys(fonts).map(fontKey => (
  { name: fontKey, family: fonts[fontKey] }
))
let fontsStories = storiesOf('Common/Fonts', module)
fontsMap.map(font => {
  fontsStories.add(font.name, () => (
    <span style={{ fontFamily: font.family }}>{font.name} - {font.family}</span>
  ))
})