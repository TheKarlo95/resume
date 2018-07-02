import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const JobContainer = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid lightgrey;
  &:last-child {
    border-bottom: none;
  }
`
const JobTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
`
const Company = styled.div`
  font-weight: bold;
  line-height: 1.2;
`
const JobTitle = styled.div``
export const Job = ({company, title, duration, description}) => {
  return (
    <JobContainer>
      <JobTitleContainer>
        <div>
          <Company>{company}</Company>
          <JobTitle>{title}</JobTitle>
        </div>
        <div>{duration}</div>
      </JobTitleContainer>
      <p>{description}</p>
    </JobContainer>
  )
}
Job.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
