import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const SuccessMessage = ({ message }) => {
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
    backgroundColor: '#3cb44b',
    marginBottom: 15,
    padding: 15,
  },
  text: {
    color: '#fff',
  },
})

export default SuccessMessage
