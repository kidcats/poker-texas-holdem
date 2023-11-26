export interface Card {
  suit: Suit; // 花色 
  rank: Rank; // 牌面值
  code: string; // 牌的代码表示,如'Ah'表示Ace of hearts
}

// 花色枚举
enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades  
}

// 牌面值枚举 
enum Rank {
  Two, 
  Three,
  Four,
  Five,
  Six,
  Seven, 
  Eight,
  Nine, 
  Ten,
  Jack,
  Queen,
  King,
  Ace
}