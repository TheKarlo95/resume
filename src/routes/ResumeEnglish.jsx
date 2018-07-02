import React, { Component } from 'react'
import styled from 'styled-components'

import { Header, Experience, Education, Skills, Interests } from '../sections'
import Logo from '../images/logo.svg'

const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
  padding: 32px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const ResumeEnglish = () => (
  <Container>
    <Header
      name="Karlo Vrbić"
      occupation="Junior Android Developer"
      email="vrbic.karlo@gmail.com"
      telephone="+385958569156"
      description="Junior Android and cross-platform developer interested in all kinds of front-end and mobile technologies. Experienced with developing Android apps with Java and Kotlin programming languages and developing cross-platform mobile apps with Ionic and Crodova frameworks."
    />
    <Experience
      jobs={[
        {
          company: 'Combis',
          title: 'Mobile cross-platform developer',
          duration: 'May 2017 - current',
          description: 'Development of cross-platform apps with Ionic, Cordova and Angular frameworks and development of native Android apps with Kotlin. Minor Java back-end development with Strut framework.'
        },
        {
          company: 'Asseco SEE',
          title: 'Android developer',
          duration: 'Jan 2017 - Apr 2017',
          description: 'Developing new features and fixing bugs on Android mobile app for Unicredit bank. App development was done in Java and with multiple modules, flavors and libraries for features like scanning.'
        },
        {
          company: 'T-Com',
          title: 'Assisting in Geodesy department',
          duration: 'Jul 2013 - Dec 2014',
          description: 'Assisting in documenting and GPS marking of existing telecommunications infrastructure. Making documentations of infrastructure in AutoCAD.'
        }
      ]}
    />
    <Education
      schools={[
        {
          name: 'University of Zagreb',
          title: 'Bachelors of Software Engineering',
          duration: 'Sep 2013 - Jul 2018',
          description: 'Module: Software Engineering and Information System. Extra course: Introduction to Java Programming Language'
        },
        {
          name: 'Infinum Academy',
          title: 'Android development',
          duration: 'Jul 2016 - Aug 2016',
          description: 'Infinum\'s course where you learn Android development while developing basic CRUD app for Pokemons'
        },
        {
          name: 'Technical school Ruđer Bošković',
          title: 'Computer technician',
          duration: 'Sep 2009 - May 2013',
          description: ''
        }
      ]}
    />
    <Skills
      description='My skills are mostly a mixture of front-end and mobile technologies with minor knowledge of Java and Javascript based back-end technologies.'
      skills={
        [
          ['Java', 'Kotlin', 'Javascript', 'Typescript'],
          ['Android', 'Ionic', 'Angular', 'React'],
          ['NodeJS', 'ExrpressJS', 'Spring', 'JAX-RS']
        ]
      }
    />
    <Interests />
  </Container>
)
