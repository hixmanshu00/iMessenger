import React from 'react'
import styled from 'styled-components'
import Robot from '../assets/robot.gif'
import MobileMenu from './MobileMenu'

const Welcome = ({currentUser, toggleMenu}) => {
  return (
    <Container>
      <div className="menu">
        <MobileMenu toggleMenu={toggleMenu} />
      </div>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  )
}

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img {
    height: 20rem;
}
span {
    color: #4e00ff;
}
.menu {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
@media only screen and (max-width: 767px) {
  h3 {
    padding: 2rem;
    text-align: center;
    color: gray;
  }

}
`

export default Welcome
