import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const ErrorMessage = ({ message }) => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        {message}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fe3a5e',
    marginBottom: 15,
    padding: 15,
  },
  text: {
    color: '#fff',
  },
})

export default ErrorMessage
