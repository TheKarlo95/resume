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
export const ResumeCroatian = () => (
  <Container>
    <Header
      name="Karlo Vrbić"
      occupation="Junior Android Developer"
      email="vrbic.karlo@gmail.com"
      telephone="+385958569156"
      description="Junior Android i cross-platform developer zainteresiran za sve vrste front-end i mobilnih tehnologija. Dobro upoznat sa razvojem Android aplikacija pomoću Java i Kotlin programskih jezika te razvojem mobilnih aplikacija pomoću Ionic i Crodova frameworka."
    />
    <Experience
      jobs={[
        {
          company: 'Combis',
          title: 'Mobile cross-platform developer',
          duration: 'Svi 2017 - current',
          description: 'Razvijanje cross-platform aplikacija s Ionic, Cordove i Angular framework-om te razvoj nativnih Android aplikacija s Kotlinom. Kratki rad na održavanju Java back-end applikacije razvijene sa Strut framework-om.'
        },
        {
          company: 'Asseco SEE',
          title: 'Android developer',
          duration: 'Sij 2017 - Tra 2017',
          description: 'Razvijanje novih funkcionalnosti i popravljanje bugova na Android mobilnoj aplikaciji za Unicredit banku. U razvoju aplikacije korišten je programski jezik Java i projekt je sastavljen od više modula, flavora i library-a za funkcionalnosti poput skeniranja.'
        },
        {
          company: 'T-Com',
          title: 'Pomoćni poslovi u odjelu geodezije',
          duration: 'Srp 2013 - Pro 2014',
          description: 'Pomoć pri dokumentiranju i GPS označavanju postojeće telekomunikacijske infrastrukture. Izrada dokumentacije infrastrukture u AutoCAD-u.'
        }
      ]}
    />
    <Education
      schools={[
        {
          name: 'Sveučilište u Zagrebu',
          title: 'Sveučilišni prvostupnik inženjer računarstva',
          duration: 'Ruj 2013 - Velj 2018',
          description: 'Modul: Programsko inženjerstvo i informacijski sustavi. Vještine: Osnove programskog jezika Java'
        },
        {
          name: 'Infinum Academy',
          title: 'Android development',
          duration: 'Jul 2016 - Aug 2016',
          description: 'Infinumov tečaj gdje polaznici uče razvoj Android aplikacija kroz razvoj CRUD Pokemon aplikacije'
        },
        {
          name: 'Tehnička škola Ruđer Bošković',
          title: 'Tehničar za računalstvo',
          duration: 'Ruj 2009 - Svi 2013',
          description: ''
        }
      ]}
    />
    <Skills
      description='Moje vještine su uglavnom mješavina front-end i mobilnih tehnologija s manje znanja back-end tehnologija temeljenih na Javi i Javascriptu.'
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
