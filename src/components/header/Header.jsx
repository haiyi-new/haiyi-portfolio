import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials  from './HeaderSocials'
import videoBg from '../../assets/videoBg.mp4'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiVuedotjs} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiBulma} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {GrMysql} from 'react-icons/gr'

const Header = () => {
  return (
    <header>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
            <h1>I'm Abdul Haiyi!</h1>
            <h2 className="text-light">Junior Software Developer</h2>
            
              <div className="content_logo">
                <ImHtmlFive/>
                <SiCss3/>
                <SiJavascript/>
                <SiReact/>
                <SiVuedotjs/>
                <BsBootstrapFill/>
                <SiBulma/>
                <IoLogoNodejs/>
                <GrMysql/>
              </div>
        <CTA/>
        <HeaderSocials/>
        </div>
    </header>
  )
}

export default Header