const getUsers = async (loadingCallback, successCallback) => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/bennydu91/rn_technical_test/main/users.json'
    )
    const json = await response.json()

    loadingCallback()

    successCallback(json.users)
  } catch (error) {
    loadingCallback()

    console.error(error)
  }
}

export { getUsers }
