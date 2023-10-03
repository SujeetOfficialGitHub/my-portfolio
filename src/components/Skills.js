import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='heading1'>
        <h1>Skills</h1>
      </div>
      <div className='skills__container'>
        <div className='frontend'>
          <h3>Frontend</h3><hr />
          <ul className='skill__list'>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> HTML</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> CSS</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> JavaScript</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Bootstrap</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> React</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Redux</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Git/Github</li>
          </ul>
        </div>

        <div className='backend'>
          <h3>Backend</h3><hr />
          <ul className='skill__list'>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> NodeJs</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Express</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> MySQL</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> MongoDB</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Python</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Django</li>
            <li className='skill__list-item'> <FaArrowAltCircleRight/> Django Rest Framework</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Skills