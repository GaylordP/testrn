import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { getUsers } from '../Data/UsersData'

const ListScreen = ({ onLogout }) => {
  const [isLoading, setLoading] = useState(false)
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    setLoading(true)

    getUsers(
      () => setLoading(false),
      (listUsers) => setListUsers(listUsers)
    )
  }, [])

  return (
    <View>
      <TouchableOpacity
        onPress={() => onLogout()}
        style={[
          styles.container,
          styles.container_logout,
        ]}
      >
        <Text style={styles.text}>
          Déconnexion
        </Text>
      </TouchableOpacity>
      {
        true === isLoading
          ? <ActivityIndicator
              color="#fff"
            />
          : <>
              {listUsers.map((user, i) => {
                return (
                  <View
                    key={user.id}
                    style={[
                      styles.container,
                      styles.container_margin,
                    ]}
                  >
                    <Text style={styles.text}>
                      {user.name}
                    </Text>
                  </View>
                )
              })}
            </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderLeftColor: '#0bd1d1',
    borderLeftWidth: 5,
    padding: 15,
  },
  container_margin: {
    marginTop: 5,
  },
  container_logout: {
    borderLeftColor: '#fe3a5e',
  },
  text: {
    color: '#fff',
  }
})

export default ListScreen
