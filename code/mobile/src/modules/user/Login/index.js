// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { isEmail, isLength } from 'validator'

// UI Imports
import Button from '../../../ui/button/Button'
import InputText from '../../../ui/input/Text'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
import { login } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Login extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmitRegister = async () => {
    const { dispatch } = this.props

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    // Validate
    let error = false

    if (!isEmail(user.email)) {
      dispatch(messageShow('The email you provided is invalid. Please try again.'))

      error = true
    } else if (!isLength(user.password, { min: 3 })) {
      dispatch(messageShow('Password needs to be atleast 3 characters long. Please try again.'))

      error = true
    }

    if (error) {
      setTimeout(() => {
        dispatch(messageHide())
      }, config.message.error.timers.default)

      return false
    } else {
      // API call
      try {
        await dispatch(login(user))
      } catch (error) {
        dispatch(messageShow(this.props.user.error))
      } finally {
        setTimeout(() => {
          dispatch(messageHide())
        }, config.message.error.timers.long)
      }
    }
  }

  render() {
    const { email, password } = this.state
    const { user: { isLoading } } = this.props

    return (
      <View>
        <InputText
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          value={email}
          onChangeText={email => this.setState({ email })}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.inputPassword.focus()
          }}
        />

        <InputText
          inputRef={input => {
            this.inputPassword = input
          }}
          placeholder={'Password'}
          secureTextEntry={true}
          returnKeyType={'go'}
          value={password}
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={event => this.onSubmitRegister(event)}
        />

        <View style={styles.buttonContainer}>
          <Button
            title={'Submit'}
            iconLeft={'check'}
            theme={'primary'}
            disabled={isLoading}
            onPress={this.onSubmitRegister}
          />
        </View>
      </View>
    )
  }
}

// Component Properties
Login.propTypes = {
  user: PropTypes.object.isRequired,
}

// Component State
function loginState(state) {
  return {
    user: state.user
  }
}

export default connect(loginState)(Login)
