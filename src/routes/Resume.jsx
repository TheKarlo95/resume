import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Experience, Education, Skills, Interests } from '../sections'

const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 32px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export class Resume extends Component {
  constructor(props) {
    super(props)
    this.language = props.language
    this.state = {
      name: '',
      occupation: '',
      email: '',
      telephone: '',
      description: '',
      jobs: [],
      education: [],
      skills: {
        description: '',
        skills: [[], [], []]
      }
    }
  }

  getResumeInfo(language) {
    if (this.isValidLanguageCode(language)) {
      return fetch(`/i18n/${language}.json`)
        .then((response) => response.json())
    } else {
      return new Promise((resolve, reject) => resolve({
        name: '',
        occupation: '',
        email: '',
        telephone: '',
        description: '',
        jobs: [],
        education: [],
        skills: {
          description: '',
          skills: [[], [], []]
        }
      }))
    }
  }

  isValidLanguageCode(lang) {
    return lang === 'en' || lang === 'hr'
  }

  componentDidMount() {
    this.getResumeInfo(this.language).then(resume => this.setState(resume))
  }

  render () {
    return (
      <Container>
        <Header
          name={this.state.name}
          occupation={this.state.occupation}
          email={this.state.email}
          telephone={this.state.telephone}
          description={this.state.description}
        />
        <Experience jobs={this.state.jobs} />
        <Education schools={this.state.education} />
        <Skills
          description={this.state.skills.description}
          skills={this.state.skills.skills}
        />
        <Interests />
      </Container>
    )
  }
}
Resume.propTypes = {
  language: PropTypes.string.isRequired
}
