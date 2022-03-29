import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import RoverItem from "./RoverItem"

const RoverList = ({ rovers }) => {
  return (
    <div className="rovers">
      <h1 className="heading">Choose a rover</h1>
      <TransitionGroup
        className="rovers-list"
        component="ul"
        appear={true}
        enter={true}
        exit={false}
      >
        {rovers.map((rover) => (
          <CSSTransition key={rover.id} timeout={500} classNames="rover-item">
            <RoverItem rover={rover} key={rover.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default RoverList
