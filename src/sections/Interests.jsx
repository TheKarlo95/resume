import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../components'

import ControllerImage from '../images/controller.svg'
import EarthImage from '../images/planet-earth.svg'
import HandshakeImage from '../images/handshake.svg'
import MonitorImage from '../images/monitor.svg'
import MusicImage from '../images/music.svg'

const InterestsContaienr = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 35px;
    opacity: 0.75;
  }
`
export const Interests = ({language}) => {
  return (
    <section>
      <SectionTitle>{language == 'en' ? 'Interests' : 'Interesi'}</SectionTitle>
      <InterestsContaienr>
        <img src={HandshakeImage} alt="handshake icon" />
        <img src={ControllerImage} alt="gaming icon" />
        <img src={MonitorImage} alt="monitor icon" />
        <img src={EarthImage} alt="travel icon" />
        <img src={MusicImage} alt="music icon" />
      </InterestsContaienr>
    </section>
  )
}
