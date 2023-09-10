import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {AiFillGithub} from 'react-icons/ai'

import './ProjectItem.css'
const ProjectItem = ({title, images, github_url}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  return (
      <div className="project__item">
        <div className="project__title">
            <h3>{title}</h3>
            <a href={github_url}><AiFillGithub /></a>
        </div>
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            {images && images.map((img, i) => (
                <SwiperSlide key={i}><img src={img} alt="" /></SwiperSlide>
            ))}
        </Swiper>
      </div>

  )
}

export default ProjectItem