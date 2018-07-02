import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { EmailLink, TelephoneLink } from '../components'
import Logo from '../images/logo.svg'

const Name = styled.div`
  font-size: 48px;
  line-height: 1;
`
const Occupation = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #236FB2;
`
const Links = styled.div`
  display: flex;
  margin: 10px 0 20px 0;
`
const AvatarImg = styled.img`
  width: 130px;
`
export const Header = ({name, occupation, email, telephone, description}) => {
  return (
    <section>
      <div>
        <div>
          <AvatarImg src={Logo} alt="avatar" class="avatar" />
        </div>
      </div>
      <div>
        <Name>{name}</Name>
        <Occupation>{occupation}</Occupation>
        <Links>
          <EmailLink email={email}/>
          <TelephoneLink number={telephone}/>
        </Links>
        <p>{description}</p>
      </div>
    </section>

  )
}
Header.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
