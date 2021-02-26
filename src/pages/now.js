import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Now = () => (
  <Layout>
    <SEO title="Consulting" />
    <h1>Now</h1>
    <div className="page-content">
      <h4>Here’s what I’m up to right now.</h4>
      <ul>
        <li>Running a non-profit organisation called <a href="https://wallrunners.org" target="_blank" rel="noreferrer">Wallrunners</a>, we're opening parkour schools in conflict areas. </li>
        <li>Writing and animating a short story about a galactic ambassador's daughter called Stella. Expecting the first three chapters to be released in February.</li>
        <li>Focusing on visual blogging as an outlet to practice ongoing learning in web development, 3D and graphics editing. Thoroughly enjoying the semi-professional excuse to dive into rabbit holes long left unattended.</li>
        <li>Experimenting with D3, React and Three.js. I'll be using the same libraries to start an interactive climate publication with a friend, bringing attention to corporate disinformation campaigns.</li>
        <li>Occasionally taking on new clients as an independent consultant.</li>
        <li>Being consistent with my spiritual practice in turbulent times, exercising religiously to keep a positive mindset.</li>
      </ul>
      <h4>Current obsessions</h4>
      <ul className="now-list">
        <li>Movie : Her</li>
        <li>TV show : Schitt's Creek</li>
        <li>Director : Salomon Ligthelm</li>
        <li>Developer/Artist : Amelia Wattenberger</li>
        <li>Book : Naval's Almanack</li>
        <li>Blog : Melting Asphalt</li>
        <li>Photographer : James Nachtwey</li>
        <li>Music : Bring Me The Horizon - Post Human Survival Horror</li>
        <li>Place : somewhere in the south of France</li>
      </ul>
      <p>Last updated January 2021</p>
      <p>Inspired by Derek Sivers and The /Now Movement</p>
    </div>
  </Layout>
)

export default Now
