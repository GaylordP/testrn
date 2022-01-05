import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const CloseButton = ({ ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.submit}
    >
      <Text
        style={styles.submit_text}
      >
        Fermer
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    padding: 15,
    alignSelf: 'flex-start',
  },
  submit_text: {
    color: '#000',
  },
})

export default CloseButton
