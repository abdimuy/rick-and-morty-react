import API from '../API'

const getCharacters = async ({ page, name } = {}) => {
  try {
    const query = createQuery(page, name)
    console.log({ query })
    console.log('/character' + query !== '' ? '?' + query : '')
    const res = await API.get('/character/' + (query !== '' ? '?' + query : ''))
    const result = [res.data.results, res.data.info]
    return result
  } catch (err) {
    console.log(err)
  }
}

const createQuery = (...params) => {
  console.log({ params })
  const paramsFilter = params
    .filter(param => param?.val !== undefined)
    .map(p => `${p.key}=${p.val}`)
  return paramsFilter.join('&')
}

export default getCharacters
