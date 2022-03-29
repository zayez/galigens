import React from "react"

const About = ({}) => {
  return (
    <div className="about container content-main">
      <h2 className="heading">About</h2>
      <p className="about-text">
        A webapp to explore the Martian surface using real-life photos from Mars
        captured by NASA's rovers operating on the Red Planet.
      </p>
      <h3 className="sub-heading">Available rovers</h3>
      <ul className="about-list">
        <li>Spirit</li>
        <li>Oportunity</li>
        <li>Curiosity (active)</li>
        <li>Perseverance (active)</li>
      </ul>
      <h3 className="sub-heading">Features</h3>
      <ul className="about-list">
        <li>Display a list of available rovers with their mission details.</li>
        <li>Display a gallery of photos by selected rover.</li>
        <li>Allow to filter the photo gallery by date (or sol) and camera.</li>
        <li>Allow to zoom photos in the rover's photo gallery.</li>
      </ul>
      <h3 className="sub-heading">References</h3>
      <ul className="about-list">
        <li>
          <a href="https://mars.nasa.gov/msl/home/">
            Mars Curiosity Rover mission
          </a>
        </li>
        <li>
          <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer">
            Opportunity Rover mission
          </a>
        </li>
        <li>
          <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit">
            Spirit Rover mission
          </a>
        </li>
        <li>
          <a href="https://www.jpl.nasa.gov/missions/mars-2020-perseverance-rover">
            Perseverance Rover mission
          </a>
        </li>
      </ul>
      <h3 className="sub-heading">Third-party resources</h3>
      <ul className="about-list">
        <li>
          <a href="https://api.nasa.gov/">NASA Open APIs</a>
        </li>
        <li>
          <a href="https://github.com/vineethtrv/css-loader">cssloaders</a>
        </li>
      </ul>
    </div>
  )
}

export default About
