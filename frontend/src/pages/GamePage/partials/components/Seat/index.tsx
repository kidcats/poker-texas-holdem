import React, { useState } from 'react'
import './style.scss'

const Seat = () => {
  // 使用 useState 来追踪按钮的可见性
  const [isButtonVisible, setButtonVisible] = useState(true)

  const handleClick = () => {
    // 处理按钮点击事件的逻辑
    // 根据当前场上的人数来给玩家发牌
    // 例如，点击按钮后隐藏按钮
    setButtonVisible(false)
  }

  return (
    // 移除额外的大括号
    <div className="game-page__seat" style={{ display: isButtonVisible ? 'block' : 'none' }}>
      <button className="seat__button" onClick={handleClick}>
        Sit Down
      </button>
    </div>
  )
}

export default Seat
