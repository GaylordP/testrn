import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
} from 'react-native'
import PrimaryButton from '../Button/PrimaryButton'

const LoginForm = ({ onSubmit }) => {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <>
      <TextInput
        value={login}
        onChangeText={setLogin}
        placeholder="Adresse e-mail"
        placeholderTextColor="#cccccc"
        autoCapitalize="none"
        autoCompleteType="email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        placeholderTextColor="#cccccc"
        autoCapitalize="none"
        secureTextEntry={true}
        autoCompleteType="password"
        style={styles.input}
      />
      <PrimaryButton
        onPress={() => onSubmit(login, password)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15,
    padding: 15,
  },
})

export default LoginForm
