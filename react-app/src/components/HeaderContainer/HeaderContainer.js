import React from 'react'
import Navbar from './Navbar'

class HeaderContainer extends React.Component {
  render() {
    return <Navbar navItems={['Listings', 'My Projects', 'Test']} activeItem={"Home"}></Navbar>
  }
}

export default HeaderContainer
