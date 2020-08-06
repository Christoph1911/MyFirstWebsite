import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        This is my first Website!
      </p>
      <p><ListLink to="/aboutDE/">DE</ListLink>
          <ListLink to="/about/">EN</ListLink></p>
    </Layout>
  )
}
