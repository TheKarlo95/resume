import React from 'react'
import PropTypes from 'prop-types'

import { Job, SectionTitle } from '../components'

export const Education = ({schools, language}) => {
  return (
    <section>
      <SectionTitle>{language == 'en' ? 'Education' : 'Edukacija'}</SectionTitle>
      <div>
        {
          schools.map((school, index) => (
            <Job
              key={index}
              company={school.name}
              title={school.title}
              duration={school.duration}
              description={school.description}
            />
          ))
        }
      </div>
    </section>
  )
}
Education.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired
}
