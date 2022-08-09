import { useState, useEffect } from 'react'
// import useGetCharacters from '../../hooks/useGetCharacters'
import logo from '../../assets/rick_and_morty.svg'
import { Spinner, Card, Input, Button } from '../../components/'
import styled from 'styled-components'
import styles from './styles'
import getCharacters from '../../services/characters/getCharacters'
import { useSelector, useDispatch } from 'react-redux'
import { addCharacters } from '../../feactures/characters/charactersSlice'

const SearchCharacters = ({ className }) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState()
  const [infoPage, setInfoPage] = useState()
  const [page, setPage] = useState()
  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()

  const handleGetCharacters = async (name) => {
    try {
      setLoading(true)
      const [charactersData, infoRes] = await getCharacters({
        name: { key: 'name', val: name },
        page: { key: 'page', val: page }
      })
      setInfoPage(infoRes)
      dispatch(addCharacters(charactersData))
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }
  useEffect(() => {
    handleGetCharacters(name)
    // eslint-disable-next-line
  }, [name, page])

  useEffect(() => {
    if (name) {
      setPage(1)
    }
  }, [name])

  useEffect(() => {
    if (infoPage) {
      setPage(
        infoPage.next !== null
          ? parseInt(new URL(infoPage.next).searchParams.get('page')) - 1
          : infoPage.prev !== null
            ? parseInt(new URL(infoPage.prev).searchParams.get('page')) + 1
            : 1
      )
    }
  }, [infoPage])

  const handleInputChange = (e) => {
    const { target: { value } } = e
    setSearch(value)
  }

  const handleSubmit = () => {
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
      <div className='characters__search-section-nav'>
        <Button
          onClick={() => setPage(page => page - 1)}
          text='Prev' disabled={infoPage.prev === null}
        />
        <div className='characters__search-section-pagination'><span>Page:</span>{page}</div>
        <Button
          onClick={() => setPage(page => page + 1)}
          text='Next' disabled={infoPage.next === null}
        />
      </div>
      <div className='characters__list'>
        {characters.map(character =>
          <Card
            character={character}
            key={character.id}
          >
            {character.name}
          </Card>
        )}
      </div>
    </div>
  )
}

export default styled(SearchCharacters)`
  ${styles}
`
