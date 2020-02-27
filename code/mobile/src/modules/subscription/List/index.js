// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import { getListByUser } from '../../subscription/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import Item from '../Item'

// Component
class Crates extends PureComponent {

  componentDidMount() {
    this.#refresh()
  }

  #refresh = () => {
    const { dispatch } = this.props

    dispatch(getListByUser(this.props.user.details.email))
  }

  render() {
    const { isLoading, list } = this.props.subscriptions

    return (
      <View style={styles.container}>
        {
          isLoading
            ? <Loading />
            : list.length > 0
            ?  list.map((subscription, i) => (
                <Item
                  key={subscription.id}
                  subscription={subscription}
                  lastItem={list.length - 1 === i}
                  onSuccessUnsubscribe={this.#refresh}
                />
              ))
            : <EmptyMessage message={'You are not subscribed to any crate yet'} />
        }
      </View>
    )
  }
}

// Component Properties
Crates.propTypes = {
  user: PropTypes.object.isRequired,
  subscriptions: PropTypes.object.isRequired
}

// Component State
function cratesState(state) {
  return {
    user: state.user,
    subscriptions: state.subscriptionsByUser
  }
}

export default connect(cratesState)(Crates)
