import React from 'react'
import Navbar from './Navbar'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-content'>
            <div className='text-section'>
                <h1 className='header-text'>
                    Welcome To Adept
                </h1>
                <p className='body-text'>
                    Join Us In Shaping The Future of Education.
                    We are dedicated to providing interactive learning solutions via our learning management system.
                </p>
                <button className='courses-button'>
                    <p>Click Here For Courses</p>
                    <ArrowCircleRightIcon />
                </button>
            </div>
            <div className='course-section'>
                <div className='course'>Math</div>
                <div className='course'>English</div>
                <div className='course'>Science</div>
                <div className='course'>Music</div>
            </div>
        </div>
    </div>
  )
}

export default Home