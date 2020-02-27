// Imports
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

// Component
class ScrollToTop extends PureComponent {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
