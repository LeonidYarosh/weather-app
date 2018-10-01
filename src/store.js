import { init } from '@rematch/core'
import { archive } from 'features/content/ducks/models'

export const store = init({ models: { archive } })
