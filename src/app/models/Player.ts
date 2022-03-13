import { Roll } from '../models/Roll'
export class Player {
  id: number // For database input purposes
  name: string
  currentScore: number
  highScore: number
  rolls: Roll []
}
