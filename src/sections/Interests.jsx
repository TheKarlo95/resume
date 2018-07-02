import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../components'

import ControllerImage from '../images/controller.svg'
import MonitorImage from '../images/monitor.svg'
import FoodImage from '../images/food.svg'
import MusicImage from '../images/music.svg'

const InterestsContaienr = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 35px;
    opacity: 0.75;
  }
`
export const Interests = (props) => {
  return (
    <section>
      <SectionTitle>Interests</SectionTitle>
      <InterestsContaienr>
        <img src={ControllerImage} alt="gaming icon" />
        <img src={MonitorImage} alt="monitor icon" />
        <img src={FoodImage} alt="food icon" />
        <img src={MusicImage} alt="music icon" />
      </InterestsContaienr>
    </section>
  )
}
