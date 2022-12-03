import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'To Do List Web Application',
    language: 'React.Js, Bootstrap, Node.Js, Express.Js & MySQL',
    github: 'https://github.com/haiyi-new/To-Do-Web-Application-MyREN',
    demo: 'https://todo-kreno-project.herokuapp.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Item Lister',
    language: 'HTML,CSS, Javascript',
    github: 'https://github.com/haiyi-new/Vanilla-JS-Item-Submit',
    demo: 'https://haiyi-new.github.io/Vanilla-JS-Item-Submit'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Landing Page Login Register',
    language: 'HTML,CSS, Javascript',
    github: 'https://github.com/haiyi-new/Landing-Page--Example',
    demo: 'https://haiyi-new.github.io/Krenovator-Task-1-Project1'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Stall Menu & Food Ordering',
    language: 'HTML,CSS, Javascript',
    github: 'https://github.com/haiyi-new/Buttermilk-Brothers-Landing-Page',
    demo: 'https://haiyi-new.github.io/Buttermilk-Brothers-Landing-Page'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Survey Form',
    language: 'HTML,CSS, Javascript',
    github: 'https://github.com/haiyi-new/Programming-Language-Survey-Form',
    demo: 'https://haiyi-new.github.io/Programming-Language-Survey-Form'
  },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolios</h2>

      <div className="container portfolio_container">
     {
     data.map(({id, image, title, language, github, demo}) => {
        return (
          <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h4>{language}</h4>
          <div className="portfolio_item-cta">
          <a href={github} className="btn" target="_blank">Github</a>
          <a href={demo} className="btn btn-primary" target="_blank" >Live Demo</a>
          </div>
          </article>
        )
      })
    }
          <article  className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6}/>
          </div>
          <h3>Others Project</h3>
          <h4>Please check my github account, always update on new things!!</h4>
          <div className="portfolio_item-cta">
          <a href='https://github.com/haiyi-new' className="btn" target="_blank">Haiyi Github</a>
          </div>
          </article>
      </div>

    </section>
  )
}

export default Portfolio