import React from "react"
import { Link } from "gatsby"
import styles from "./consulting.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Consulting = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p className={styles.user}> testing this</p>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Consulting
