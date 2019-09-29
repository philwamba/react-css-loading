import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ellipsis } from '../src/Ellipsis'
import { Ring } from '../src/Ring'

storiesOf('Spinners', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
