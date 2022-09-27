import { withStatusBar } from '@/hocs'
import { CharacterScreen as Character } from './CharacterScreen'
import { CharactersScreen as Characters } from './CharactersScreen'
import { FilmScreen as Film } from './FilmScreen'
import { FilmsScreen as Films } from './FilmsScreen'
import { HomeScreen as Home } from './HomeScreen'

export const CharacterScreen = withStatusBar(Character)
export const CharactersScreen = withStatusBar(Characters)
export const FilmScreen = withStatusBar(Film)
export const FilmsScreen = withStatusBar(Films)
export const HomeScreen = withStatusBar(Home)
