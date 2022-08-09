import { css } from 'styled-components'

export default css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 15px;

  .characters_logo {
    width: 250px;
    height: 100px;
    margin-top: 25px;
  }

  .characters__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .characters__search-section {
    display: flex;
    gap: 15px
  }
`
