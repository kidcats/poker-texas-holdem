import { Player } from "./gamers"

export interface IGameData {
  hash?: string
  smallBlind: number
  bigBlind: number
  buyIn: number
  seatCount: number
  players : Player[] // 在这局游戏中的玩家
}
