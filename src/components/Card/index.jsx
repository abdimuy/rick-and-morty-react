import { useState } from 'react'
import styles from './styles'
import styled from 'styled-components'
import Modal from '../Modal'
import { Tilt } from '../index'
import './stylesCss.css'

const Card = ({ className, character }) => {
  const [isOpen, setIsOpen] = useState(false)
  const options = {
    scale: 1.1,
    speed: 400,
    max: 20
  }
  return (
    <div className={className} onClick={() => setIsOpen(isOpen => !isOpen)}>
      <div className='card__imgbox'>
        <img src={character.image} alt={character.name} />
      </div>

      <div className='card__content'>
        <h2>
          {character.name}
        </h2>
        <span>
          {character.species}
        </span>
      </div>
      <Modal isOpen={isOpen}>
        <div className='card__modal_container'>
          <Tilt options={options} className='card__modal'>
            <div className='card__moda_imgbox'>
              <img src={character.image} alt={character.name} className='card__modal_img' />
            </div>
            <div className='card__modal_box-content'>
              <div><b>Name: </b>{' ' + character.name}</div>
              <div><b>Species: </b>{' ' + character.species}</div>
              <div><b>Type: </b>{' ' + character.type}</div>
              <div><b>Gender: </b>{' ' + character.gender}</div>
              <div><b>Status: </b>{' ' + character.status}</div>
              <div><b>Origin: </b>{' ' + character.origin.name}</div>
              <div><b>Location: </b>{' ' + character.location.name}</div>
              <div><b>Created: </b>{' ' + character.created}</div>
            </div>
          </Tilt>
        </div>
      </Modal>
    </div>
  )
}

export default styled(Card)`
  ${styles}
`
