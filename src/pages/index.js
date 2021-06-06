import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tom Vaillant" description="Mammal with opposable thumbs building things on the internet." />
    <h1>Hi there,</h1>
    <h2>I'm Tom, a creative producer, documentary filmmaker and vanilla developer currently starting <a href="https://buriedsignals.com" target="_blank">Buried Signals</a>, a creative production studio for visual journalism. I freelance as an executive producer for <a href="https://northkingdom.com" target="_blank">North Kingdom</a> and <a href="https://immersive-g.com">Immersive Garden</a>. A few years ago I founded <a href="https://wallrunners.org" target="_blank">Wallrunners</a>.</h2>

    <h2>Past gigs have found me producing campaigns for <a href="https://www.riotgames.com/en/work-with-us/offices/dublin/getting-creative-with-eus-publishing-team" target="_blank">Riot</a>, a <a href="https://www.ibm.com/security/digital-assets/cybersecurity-ops/terminal/" target="_blank">cinematic game for IBM</a>, <a href="https://www.redbull.com/us-en/parkour-in-gaza" target="_blank">action sports films</a> and <a href="https://hyphenate.tv/work/redbull-chromasound-vr/" target="_blank">VR music experiences</a> for Red Bull. A long time ago in a country far far away I stumbled my way through making <a href="https://vimeo.com/145770250" target="_blank">a documentary</a> about adventurers in extreme places. Clients have included HBO, UNDP, Nespresso, Electronic Arts.</h2>

    <h2>For the past four years I’ve dedicated a day a week to my practice as an independent consultant, helping businesses and non-profits build content production and digital marketing capabilities.</h2>

    <div className="social-buttons-container">
      <h4>Get in touch!</h4>
      <div className="social-buttons">  
        <a href="https://twitter.com/tomvaillant_" target="_blank" rel="noreferrer" className="social-button-twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:tom@buriedsignals.com" rel="noreferrer" target="_blank" className="social-button-email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
