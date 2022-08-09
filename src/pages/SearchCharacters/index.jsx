import { useState, useEffect } from 'react'
// import useGetCharacters from '../../hooks/useGetCharacters'
import logo from '../../assets/rick_and_morty.svg'
import { Spinner, Card, Input, Button } from '../../components/'
import styled from 'styled-components'
import styles from './styles'
import getCharacters from '../../services/characters/getCharacters'
import { useSelector, useDispatch } from 'react-redux'
import { addCharacters } from '../../feactures/characters/charactersSlice'
// import { useLocation } from 'react-router-dom'

const SearchCharacters = ({ className }) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState()
  // const [characters, loading] = useGetCharacters({ name: { key: 'name', val: name } })
  // const location = useLocation()
  // console.log(new URLSearchParams(location.search))
  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()

  const handleGetCharacters = async (name) => {
    try {
      setLoading(true)
      const charactersData = await getCharacters({ name: { key: 'name', val: name } })
      dispatch(addCharacters(charactersData))
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }
  useEffect(() => {
    handleGetCharacters(name)
    // eslint-disable-next-line
  }, [name])

  const handleInputChange = (e) => {
    const { target: { value } } = e
    setSearch(value)
  }

  const handleSubmit = () => {
    // setSearch(input.current.target.value)
    setName(search)
  }

  if (loading) return <Spinner />

  return (
    <div className={className}>
      <img src={logo} alt='Rick and Morty' className='characters_logo' />
      <div className='characters__search-section'>
        <Input ph='Search...' value={search} onChange={handleInputChange} />
        <Button onClick={handleSubmit} text='Search' />
      </div>
      <div className='characters__list'>
        {characters.map(character =>
          <Card character={character} key={character.id}>{character.name}</Card>
        )}
      </div>
    </div>
  )
}

export default styled(SearchCharacters)`
  ${styles}
`
