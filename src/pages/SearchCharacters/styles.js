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
    gap: 15px;
    align-items: center;
  }

  .characters__search-section-nav {
    display: flex;
    gap: 15px;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: space-between;
    padding: 0 15px
  }

  .characters__search-section-pagination {
    color: #b4a1a1;
    font-size: 20px;

    span {
      color: #b4a1a1
    }
  }
`
