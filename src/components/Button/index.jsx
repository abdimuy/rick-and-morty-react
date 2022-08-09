import React from 'react'
import styled from 'styled-components'
import styles from './styles'

const Button = ({ text, onClick, className, disabled }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>{text}</button>
  )
}

export default styled(Button)`
  ${styles}
`
