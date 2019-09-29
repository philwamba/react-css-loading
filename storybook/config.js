import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

// Option defaults.
addParameters({
  options: {
    theme: themes.dark
  }
})

function loadStories () {
  require('../stories/index.js')
}

configure(loadStories, module)
