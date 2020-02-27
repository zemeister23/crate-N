// Imports
import React, { PureComponent } from 'react'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import ProductList from '../../product/List'

// Component
class WhatsNew extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Body>
          <ProductList />
        </Body>
      </View>
    )
  }
}

export default WhatsNew
