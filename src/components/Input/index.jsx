import React from 'react'
import styled from 'styled-components'
import styles from './styles'

const Input = ({ className, ph, onChange, value, ref }) => {
  return (
    <input
      className={className}
      placeholder={ph}
      onChange={onChange}
      value={value}
      ref={ref}
    />
  )
}

export default styled(Input)`
  ${styles}
`
