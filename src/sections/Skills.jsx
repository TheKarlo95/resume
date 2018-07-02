import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SectionTitle } from '../components'

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 24px;

  ul {
    margin-left: 20px;
    list-style-type: disc;
  }
`
export const Skills = ({skills, description}) => {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div>
        <SkillsContainer>
          {
            skills.map(subskills => {
              return (
                <ul>
                  {subskills.map(skill => <li>{skill}</li>)}
                </ul>
              )
            })
          }
        </SkillsContainer>

        <p>{description}</p>
      </div>
    </section>
  )
}
Skills.propTypes = {
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
}
