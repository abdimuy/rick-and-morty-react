import React from 'react'
import styles from './styles'
import styled from 'styled-components'

const Card = ({ className, character }) => {
  return (
    <div className={className}>
      <div className='card__imgbox'>
        <img src={character.image} />
      </div>

      <div className='card__content'>
        <h2>
          {character.name}
        </h2>
        <span>
          {character.species}
        </span>
      </div>
    </div>
  )
}

export default styled(Card)`
  ${styles}
`
