// Imports
import React from 'react'
import { storiesOf } from '@storybook/react'

// UI Imports
import { Modal } from '../../src/ui/modal'

// Buttons
storiesOf('Modal', module)
  .add('simple', () => (
    <Modal>
      <p>Hello world</p>
    </Modal>
  ))