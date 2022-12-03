import React from 'react'
import './experience.css'
import {BsPatchCheckFill,BsFillXCircleFill} from 'react-icons/bs'


const experience = () => {
  return (
    <section id='experience'>
      <h5>My Programming Language</h5>
      <h2>Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Expert</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Expert</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Proficient</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Proficient</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Vue</h4>
            <small className="text-light">Trainee</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Bulma</h4>
            <small className="text-light">Proficient</small></div>
            </article>
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>React</h4>
            <small className="text-light">Novice</small></div>
            </article>

            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>Tailwind</h4>
            <small className="text-light">Planning</small></div>
            </article>

            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>Ionic</h4>
            <small className="text-light">Planning</small></div>
            </article>

            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>React Native</h4>
            <small className="text-light">In Progress</small></div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        {/* END OF FRONTEND */}
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Express.Js</h4>
            <small className="text-light">Novice</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Node.js</h4>
            <small className="text-light">Novice</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Proficient</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>PostgreSQL</h4>
            <small className="text-light">Novice</small></div>
            </article>

            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>C++</h4>
            <small className="text-light">Planning</small></div>
            </article>
            
            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Xampp</h4>
            <small className="text-light">Novice</small></div>
            </article>

            <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>OpenCV</h4>
            <small className="text-light">Novice</small></div>
            </article>

            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>PHP</h4>
            <small className="text-light">In Progress</small></div>
            </article>

            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>Laravel</h4>
            <small className="text-light">Planning</small></div>
            </article> 
            
            <article className="experience_details">
            <BsFillXCircleFill className="experience_details-icon2"/>
            <div>
            <h4>Solidity</h4>
            <small className="text-light">Planning</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience