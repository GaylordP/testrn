import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import CloseButton from './Components/Button/CloseButton'
import SuccessMessage from './Components/FlashMessage/SuccessMessage'
import Header from './Components/Templates/Template/Header'
import ChoiceScreen from './Screens/ChoiceScreen'
import ListScreen from './Screens/ListScreen'
import LoginScreen from './Screens/LoginScreen'

const Main = () => {
  const [route, setRoute] = useState('login')
  const [isLogged, setLogged] = useState(false)
  const [isLogoutMessage, setLogoutMessage] = useState(false)

  return (
    <View
      style={styles.container}
    >
      <Header
        isLogged={isLogged}
        currentRoute={route}
        onChangeRoute={(routeName) => setRoute(routeName)}
      />
      <View
        style={styles.content_container}
      >
        {
          true === isLogoutMessage && <TouchableOpacity
            style={styles.close_container}
          >
            <View
              style={styles.close_container_message}
            >
              <SuccessMessage
                message="Vous êtes déconnecté."
              />
            </View>
            <CloseButton
              onPress={() => setLogoutMessage(false)}
            />
          </TouchableOpacity>
        }
        {
          'login' === route && false === isLogged && <LoginScreen
            onSuccess={() => setLogged(true)}
          />
        }
        {
          'login' === route && true === isLogged && <ListScreen
            onLogout={() => {
              setLogoutMessage(true)
              setLogged(false)
            }}
          />
        }
        {
          'gaylord' === route && <ChoiceScreen />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  content_container: {
    backgroundColor: '#262626',
    flex: 1,
    padding: 15,
  },
  close_container: {
    flexDirection: 'row',
  },
  close_container_message: {
    flex: 1,
    marginRight: 15,
  }
  })

export default Main
