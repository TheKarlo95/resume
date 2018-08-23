import React from 'react'
import PropTypes from 'prop-types'

import { Job, SectionTitle } from '../components'

export const Experience = ({jobs, language}) => {
  return (
    <section>
      <SectionTitle>{language == 'en' ? 'Experience' : 'Iskustvo'}</SectionTitle>
      <div>
        {
          jobs.map((job, index) => (
            <Job
              key={index}
              company={job.company}
              title={job.title}
              duration={job.duration}
              description={job.description}
            />
          ))
        }
      </div>
    </section>
  )
}
Experience.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired
}
