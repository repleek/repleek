import { atom } from 'recoil'
import { Movie } from 'types'

export const pageState = atom<number>({
  key: 'page-movie',
  default: 2,
})

export const moviesListState = atom({
  key: 'movies-list',
  default: {},
})

export const movieState = atom<Movie>({
  key: 'movie',
  default: null,
})
