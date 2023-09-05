import './style.scss'
import Python from 'assets/icons/python.png'
import Django from 'assets/icons/django.png'
import TypeScript from 'assets/icons/typescript.png'
import React from 'assets/icons/react.png'
import Sass from 'assets/icons/sass.png'
import Postgres from 'assets/icons/postgres.png'
import Redis from 'assets/icons/redis.png'
import Docker from 'assets/icons/docker.png'
import AWS from 'assets/icons/aws.png'

const icons = [
  { name: 'python', left: '20%', top: '20%', animationDelay: '0s', icon: Python },
  { name: 'django', left: '45%', top: '25%', animationDelay: '0.3s', icon: Django },
  { name: 'typescript', left: '15%', top: '55%', animationDelay: '1.7s', icon: TypeScript },
  { name: 'react', left: '65%', top: '30%', animationDelay: '1s', icon: React },
  { name: 'sass', left: '32%', top: '42%', animationDelay: '0.2s', icon: Sass },
  { name: 'postgres', left: '50%', top: '55%', animationDelay: '1.3s', icon: Postgres },
  { name: 'redis', left: '35%', top: '75%', animationDelay: '0.4s', icon: Redis },
  { name: 'docker', left: '75%', top: '60%', animationDelay: '1.3s', icon: Docker },
  { name: 'aws', left: '60%', top: '85%', animationDelay: '0.6s', icon: AWS }
]

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`floating-icons__icon icon__${icon.name}`}
          style={{
            left: icon.left,
            top: icon.top,
            animation: `float 3s infinite linear ${icon.animationDelay}`
          }}>
          <img src={icon.icon} alt={icon.name} />
        </div>
      ))}
    </div>
  )
}

export default FloatingIcons