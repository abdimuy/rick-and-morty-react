import React from 'react'
import './styles.css'

const Spinner = () => {
  return (
    <div className='containerStyles'>
      <div className='css-sanchez'>
        <div className='head'>
          <p className='eyebrow' />
          <ul className='eyes'>
            <li><span /></li>
            <li><span /></li>
          </ul>
          <p className='nose' />
          <div className='mouth-container'>
            <div className='mouth'>
              <ul>
                <li><span /></li>
                <li><span /></li>
                <li><span /></li>
                <li><span /></li>
                <li><span /></li>
              </ul>
            </div>
            <p className='drool' />
          </div>
          <div className='extra-details'> <span /> <span /> <span /> <span /> </div>
        </div>
        <ul className='hair'>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
          <li><span /></li>
        </ul>
        <div className='text'>Loading...</div>
      </div>
    </div>
  )
}

export default Spinner
