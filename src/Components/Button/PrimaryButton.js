import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const PrimaryButton = ({ ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.submit}
    >
      <Text
        style={styles.submit_text}
      >
        Se connecter
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#0bd1d1',
    borderRadius: 5,
    padding: 15,
    alignSelf: 'flex-start',
  },
  submit_text: {
    color: '#000',
  },
})

export default PrimaryButton
