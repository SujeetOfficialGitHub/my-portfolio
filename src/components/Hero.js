import React from 'react'
import {BsFacebook, BsLinkedin} from  'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import profileimg from '../assets/profile.png'
import { TypeAnimation } from 'react-type-animation';
import cvFile from '../assets/Sujeet Resume full.pdf'

const Hero = () => {
    const sentences = [
        'Frontend Developer',
        1000,
        'Backend Developer',
        1000,
        'Python Developer',
        1000,
        'Django Developer',
        1000,
        'React Developer',
        1000,
        'NodeJs Developer',
        1000,
        'Mern Stack Developer',
        1000,
    ]
  return (
    <section id='home' className='hero'>
        <div className="hero-content">
            <h1>Hi I'm Sujeet Kushwaha</h1>
            <div className="change-text">
                <h3>And I'm</h3>&nbsp;
                <TypeAnimation 
                    sequence={sentences}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </div>
            <div className="info-box">
                <div className="email-info">
                    <h5>Email :</h5>
                    <span>sujeetgroups@gmail.com</span>
                </div>
            </div>
            <div className="btn-box">
                <a href={cvFile} download="Sujeet Resume.pdf" className='btn'>Download CV</a>
                <a href="/#contact" className='btn'>Hire me Now</a>
            </div>
            <div className='social-icons'>
                <a href="https://github.com/SujeetOfficialGitHub" target='_blank' rel="noreferrer" ><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/sujeet-kushwaha-a0088312a" target='_blank' rel="noreferrer"><BsLinkedin/></a>
                <a href="/#facebook"><BsFacebook/></a>
            </div>
        </div>

        <div className="hero-image">
            <div className="img-box">
                <img src={profileimg} alt="profile" />
            </div>
        </div>
    </section>
  )
}

export default Hero