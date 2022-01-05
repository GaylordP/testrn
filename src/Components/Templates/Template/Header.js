import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const links = [
  {
    routeName: 'login',
    title: 'Connexion',
  },
  {
    routeName: 'gaylord',
    title: 'Choix technique',
  },
]

const Header = ({ isLogged, currentRoute, onChangeRoute }) => {
  return (
    <View
      style={styles.container}
    >
      {
        links.map((link, i) => {
          return (
            <TouchableOpacity
              onPress={() => onChangeRoute(link.routeName)}
              style={[
                styles.item_container,
                link.routeName === currentRoute
                  ? styles.item_container_active
                  : null
              ]}
              key={i}
            >
              <Text style={styles.item_text}>
                {'login' === link.routeName && true === isLogged ? 'Utilisateurs' : link.title}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    padding: 15,
  },
  item_container: {
    backgroundColor: '#262626',
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  item_container_active: {
    backgroundColor: '#0bd1d1',
  },
  item_text: {
    color: '#fff',
  },
})

export default Header
