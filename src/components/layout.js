import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, backgroundColor: `#FFD35D`}}>
          <h3 style={{ display: `inline` }}>Christoph Paltzer</h3>
        </Link>
        <ul style={{ listStyle: url(`data:image/jpeg;base64,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`), float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
