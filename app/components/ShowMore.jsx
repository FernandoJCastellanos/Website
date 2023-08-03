
// Environment
import React from 'react'


// Components

  
  
  
  
// TypeScript






const ShowMore = ({videoSource, techUsed, accomplishment, GitHub}) => {
  return (
    <div className="learnmore-master-container">
    <div>
        <p className="learn-more-title">
            Built with:
        </p>
        <p className="learn-more-text">
            {techUsed}
        </p>
    </div>

    <div>
        <p className="learn-more-title">
            Project Goal:
        </p>
        <p className="learn-more-text">
            {accomplishment}
        </p>
    </div>

    <div>
        <p className="learn-more-title">
            GitHub Repo:
        </p>
        <a className="learn-more-text" href={GitHub} target="_blank" rel="noopener noreferrer">
            Link
        </a>
    </div>


  </div>
  )
}

export default ShowMore