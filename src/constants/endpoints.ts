import Config from 'react-native-config'

export const Endpoints = {
  main: Config.BASE_URL,
  people: `${Config.BASE_URL}/people/`,
  films: `${Config.BASE_URL}/films/`,
}
