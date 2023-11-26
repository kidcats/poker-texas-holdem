import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import { Card } from 'models/card';
import './style.scss'


interface CardDealAnimationProps {
    cards: Card[]
}


const CardDealAnimation: React.FC<CardDealAnimationProps> = ({ cards }) => {
    const [isDealing, setIsDealing] = useState(false);

    // 动画控制
    const cardAnimation = useSpring({
        from: { left: '0%', top: '0%', opacity: 0 },
        to: async (next) => {
            await next({ opacity: 1 })
            await next({ left: '50%', top: '50%' })
        },
        reset: true,
        onRest: () => setIsDealing(false), // 动画完成后的重置状态
    })

    // 计算高度
    const calculateLayerHeight = () => {
        const maxCardsPerPlayer = 5
        const totalCards = cards.length
        const layers = Math.ceil(totalCards / maxCardsPerPlayer)

        const layerHeight = 50
        return layers * layerHeight
    }

    const startAnimation = () => {
        setIsDealing(true)
    }

    return <div onClick={startAnimation} className='card-deal-animation'>
        {cards.map((card,index) => (
            <animated.div key={index} style={{...cardAnimation,zIndex:index,position:'absolute',top:calculateLayerHeight()}}>

            </animated.div>
        ))}
    </div>
}
export default Card;