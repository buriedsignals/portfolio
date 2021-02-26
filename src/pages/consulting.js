import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import redbull from "../images/logos/redbull.png"
import seedstars from "../images/logos/seedstars.png"
import northkingdom from "../images/logos/northkingdom.png"
import immersive from "../images/logos/immersive-garden.jpg"

const Consulting = () => (
  <Layout>
    <SEO title="Consulting" />
    <h1>Consulting</h1>
    <div className="page-content">
      <p>For the past four years I’ve dedicated a day a week to my practice as an independent consultant, helping businesses and non-profits build content production and digital marketing capabilities. I specialize in content and platform strategy, from early-stage roadmap design to implementation and distribution.</p>
      <p>The focus and length of these collaborations varies widely depending on long-term strategic priorities. We decide together whether your needs can be solved with swift design solutions or regular consulting where I join the team for a pre-determined period of time. </p>
      <p>By working with me you also gain access to a network of experienced artists, designers, composers and developers I’ve worked with repeatedly. We select the most suitable candidates for your project together.</p>
      <p> I’ve been interested in the web, film and storytelling since I was young. Crowdfunding my first documentary about adventurers on Everest and in the arctic when I was 19, moving on to work as a producer and filmmaker for Red Bull and North Kingdom. Over the past decade I've grown from operating as a solo-shooter and photographer to leading multi-disciplinary teams on film, web and XR productions.</p>
    </div>
    <div className="consulting-logos">
      <img src={northkingdom} alt="" />
      <img src={redbull} alt="" />
      <img src={immersive} alt="" />
      <img src={seedstars} alt="" />
    </div>
    <div className="social-buttons-container">
      <h2>Get in touch!</h2>
      <div className="social-buttons">  
        <a href="https://twitter.com/buriedsignals" rel="noreferrer" className="social-button-twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:tom.vaillant@hey.com" rel="noreferrer" className="social-button-email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  </Layout>
)

export default Consulting
