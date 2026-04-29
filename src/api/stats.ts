import type { Stats } from '../types/Stats.ts'
import { api } from '../libs/api'

export const getStats = () => api.get<Stats>('/stats')
