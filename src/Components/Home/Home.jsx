import React from 'react'
import "./Home.scss";
const Home = () => {
  return (
    <div className='image-container'>
      <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img className='image'
        src="https://i.pinimg.com/originals/11/b6/76/11b6769c8f2ea91b25fa0bb10bcaf4ab.jpg"
        alt="Girl in a jacket"
        
      ></img>
    </div>
  );
}

export default Home