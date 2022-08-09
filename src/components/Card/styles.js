import { css } from 'styled-components'

export default css`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  background-color: #060c21;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    height: 400px
  }

  .card__imgbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .card__imgbox img {
    max-width: 100%;
    opacity: 0.5;
    transition: 0.5s
  }

  .card__imgbox:hover img {
    opacity: 1
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px)
  }

  &:nth-child(n)::before, &:nth-child(n)::after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }

  &:nth-child(2n)::before, &:nth-child(2n)::after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
  }

  &:nth-child(3n)::before, &:nth-child(3n)::after {
    background: linear-gradient(235deg, #772aff, #010615, #2196f3);
  }

  .card__content {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover .card__content {
    opacity: 1;
    transition: 0.5s;
  }

  .card__content h2 {
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
  }

  .card__content span {
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 2px;
  }
`
