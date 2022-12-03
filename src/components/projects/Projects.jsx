import React from 'react'
import './projects.css'
import PRJT1 from '../../assets/project1.jpg'
import PRJT2 from '../../assets/project2.jpg'
import PRJT3 from '../../assets/project3.jpg'
import PRJT4 from '../../assets/project4.jpg'
import PRJT5 from '../../assets/project5.jpg'
import PRJT6 from '../../assets/project6.jpg'

import {Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";


const data = [
  {
    title: 'Moving Object Detection for Vision System',
    project: PRJT1,
    language: 'C++, OpenCV, Microsoft Visual C++, Webcam 720p',
    review: 'Final Year Project. To develop the new programme algorithm to do the background subtraction method on an image with motion object.The detection when motion object cross the line will added the count by 1 to the object counter.'
  },
  {
    title: 'System Analyst on E-Commerce Web Application',
    project: PRJT2,
    language: 'PostgreSQL, Employee System Management',
    review: 'Working on new development and enhancements to existing applications. Liaise with users on application queries and problems and take appropriate action promptl. Provide operational support and ongoing maintenance and enhancement after implementation in Software Development Life Cycle (SDLC).'
  },
  {
    title: 'Donaldson Dessicant Air Dryer',
    project: PRJT3,
    language: 'Install, Testing, Commission, Troubleshoot, Service, Maintenance & Repair',
    review: 'Documentation of all key learnings and best known method (BKM) from Source Inspection, Installation and qualification to ensure proliferation to other Equipment. Manage the Equipment Installation. Focus on any report of equipment status, work status and incidents, as well as problems and highlights to superior and management.'
  },
  {
    title: 'RENK Gearbox System in Germany',
    project: PRJT4,
    language: 'Gearbox System',
    review: 'RENK Maintenance Level 3 of Reduction Gear Type ASLX150. Training for license to maintain and preserve RENK Gearbox.'
  },
  {
    title: 'Maintenance and Testing Project in various Power Plant throughout Malaysia and Singapore.',
    project: PRJT5,
    language: 'Coal & Gas Power Plant',
    review: 'Analyzing, Troubleshooting, Inspection and Maintenance Main Steam Piping Line in Malaysia & Singapore Power Plant. Preparing project and product documentation in accordance with ISO requirements and predefined procedures.'
  },
  {
    title: 'MTU OEM for Littoral Combat System Second Generation Patrol Vessel.',
    project: PRJT6,
    language: 'Engine & Generator',
    review: 'Planned Preventive Maintenance and Preservation on the engine, generator, and gearbox. Leading Factory Acceptance Test on new engine and generator. Oversee the Testing and Commissioning of new engines and generators.'
  }
  
]

const Project = () => {
  return (
    <section id='projects'>
      <h5>Involvement in </h5>
      <h2>Projects</h2>

      <Swiper className="container projects_container"
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
      {
        data.map(({title ,project, language, review}, index) => { 
          return (
            <SwiperSlide key={index} className="testimonial">
              <h3>{title}</h3>
              <div className="client_avatar">
                <img src={project} alt="Avatar One" />
              </div>
              <h5 className="client_name">{language}</h5>
              <small className="client_review">
                {review}
              </small>
            </SwiperSlide>
          ) 
        })
      }
      </Swiper>
      
    </section>
  )
}

export default Project