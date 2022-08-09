import { useDispatch, useSelector } from 'react-redux'
import { addCharacters } from '../feactures/characters/charactersSlice'
import { useEffect, useState } from 'react'
import getCharacters from '../services/characters/getCharacters'

const useGetCharacters = ({ name, page } = {}) => {
  const [loading, setLoading] = useState(true)
  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()

  const handleGetCharacters = async () => {
    try {
      setLoading(true)
      const charactersData = await getCharacters({ name, page })
      dispatch(addCharacters(charactersData))
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }
  useEffect(() => {
    handleGetCharacters()
    // eslint-disable-next-line
  }, [])
  return [characters, loading]
}

export default useGetCharacters
