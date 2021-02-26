import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import List from "../components/List/list"
import SEO from "../components/seo"
import avatar from "../images/avatar.jpg"
import beirut from "../images/projects/beirut.jpeg"
import armenia from "../images/projects/armenia.jpg"
import bonnaroo from "../images/projects/bonnaroo.jpg"
import buried from "../images/projects/BS-thumbnail.png"
import bss from "../images/projects/bss.jpg"
import dragon from "../images/projects/dragon.png"
import seedstars from "../images/projects/seedstars.png"
import terminal from "../images/projects/terminal.png"
import wallrunners from "../images/projects/wallrunners.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Tom Vaillant" description="Producer | Filmmaker | Developer" />
    <img src={avatar} className="avatar" alt="" />
    <h1>Hi, I'm Tom!</h1>
    <h2>I’m a creative producer, filmmaker and developer. I write long-form visual essays on <a href="https://buriedsignals.com" target="_blank" rel="noreferrer">Buried Signals</a> and recently co-founded <a href="https://wallrunners.org" target="_blank" rel="noreferrer">Wallrunners</a> to open parkour academies in faraway places.</h2>

    <h4>Some things I made</h4>
    <List title="Buried Signals" description="My blog, an outlet for experiments in visual journalism and fiction." url="https://buriedsignals.com" img_url={buried} />
    <List title="Riot Games : L10 Experience" description="Produced a 72h cinemetic WebGL experience with North Kingdom, starring Ryze for Riot's 10 years." url="https://www.riotgames.com/en/work-with-us/offices/dublin/getting-creative-with-eus-publishing-team" img_url={dragon} />
    <List title="IBM : Cybersec Ops - Terminal" description="Produced an airport cyber breach simulation with North Kingdom." url="https://www.ibm.com/security/digital-assets/cybersecurity-ops/terminal/" img_url={terminal} />
    <List title="Seedstars Life" description="Produced content and built a hub for the Seedstars media library : documentaries, short episodes, podcasts and articles." url="https://www.seedstars.com/content-hub/life/" img_url={seedstars} />
    <List title="UNDP : Armenia VR" description="Directed a VR experience covering UNDP projects in Armenia." img_url={armenia} />
    <List title="Red Bull : Beirut Underground" description="Directed a short documentary exploring the riveting Lebanese nightlife." url="https://www.redbull.com/int-en/videos/underground-beirut-the-history-of-lebanons-nightlife-scene" img_url={beirut}/>
    <List title="Red Bull : Wallrunners of Gaza" description="Directed and filmed an action film about parkour athletes from Gaza." url="https://www.redbull.com/us-en/parkour-in-gaza" img_url={wallrunners} />
    <List title="Red Bull : Chromasound" description="Directed a VR film and animated illustrations about music festivals." url="https://hyphenate.tv/work/redbull-chromasound-vr/" img_url={bonnaroo} />
    <List title="Between Snow & Stars" description="Directed a feature documentary about explorers on Everest and in the Arctic." url="https://vimeo.com/145770250" img_url={bss} />
    
    <div className="social-buttons-container">
      <h2>Get in touch!</h2>
      <div className="social-buttons">  
        <a href="https://twitter.com/buriedsignals" target="_blank" rel="noreferrer" className="social-button-twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:tom.vaillant@hey.com" rel="noreferrer" target="_blank" className="social-button-email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
