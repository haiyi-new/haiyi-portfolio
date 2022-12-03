import React from 'react';
import './about.css';
import ME from '../../assets/meme.png'
import {FaUserGraduate} from 'react-icons/fa'
import {GiLightBackpack} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaUserGraduate className="about_icon" />
              <h5>Personal Info</h5>
              <small>31 Years Old</small>
              <small>Single, From Kedah Malaysia</small>
              <small>Bachelor Degree in Mechanical Engineering</small>
              <h5>Certificate</h5>
              <small>CIDB, Niosh AESP, Niosh NTSP, B2,D & GDL Driving License</small>
            </article>
            <article className="about_card">
              <GiLightBackpack className="about_icon" />
              <h5>Experiences</h5>
              <small>1+ Years in System Analyst & Software Engineer Scope </small>
              <small>5+ Years as Project Engineer</small>
              <small>Software & Programming Language mostly Self Taught</small>
              <h5>Personality</h5>
              <small> Fast Learner,Adaptable</small>
              <small> Strong Problem-solving</small>
              <small> Good Analytical, Resolved</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Abilities</h5>
              <small>1)Office Documentation, GIMP, Microsoft Office, Blender, Video Editor</small>
              <small>2)AutoCAD, MATLAB, CATIA, OpenCV, QC 7 Step, 6 Sigma, Audit ISO 9000 & 14001 </small>
              <small>3)Able to deploy Full Stack Project on Heroku & Netlify, REST API & JSON Request & Response, Postman</small>
            </article>
          </div>
          <p>
          With all my respect, I would like to pursue job as a Software Engineer. I'm interested venturing into other fields and would like to expand and grow my career,skill and expertise. I hope my knowledge and experience as a Project Engineer will be added value to the company.
          </p>
          <p>As a newcomer in this industry, I'm prepared to learn new technology,software or any programming language.Also, I'm willing to relocate and gain real experience first hand.</p>
        </div>
      </div>
    </section>
  )
}

export default about