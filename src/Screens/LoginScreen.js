import React, { useState } from 'react'
import {
  StyleSheet,
} from 'react-native'
import ErrorMessage from '../Components/FlashMessage/ErrorMessage'
import LoginForm from '../Components/Form/LoginForm'

const LoginScreen = ({ onSuccess }) => {
  const [isLoginError, setLoginError] = useState(false)

  return (
    <>
      {
        true === isLoginError &&
        <ErrorMessage
          message="Vos identifiants sont incorrects."
        />
      }
      <LoginForm
        onSubmit={(login, password) => {
          if ('demo@myunisoft.fr' === login && 'MyUnisoft2021**' === password) {
            onSuccess()
          } else {
            setLoginError(true)
          }
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  feature_container: {
    alignSelf: 'center',
  },
  feature_text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  item_container: {
    padding: 5,
  },
  icon_centered: {
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center',
  },
  button_price: {
    marginTop: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
})

export default LoginScreen
