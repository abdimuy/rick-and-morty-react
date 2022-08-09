import React from 'react'
import styled from 'styled-components'
import styles from './styles'

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>{text}</button>
  )
}

export default styled(Button)`
  ${styles}
`
