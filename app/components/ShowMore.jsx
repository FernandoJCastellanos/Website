
// Environment
import React from 'react'


// Components

  
  
  
  
// TypeScript






const ShowMore = ({ techUsed, Repo, Demo}) => {
  return (
    <div className=" w-[100%] flex flex-col px-5 justify-center">
        <div className='mb-7'>
            <p className="my-1">
                Built with:
            </p>
            <p className=" my-1">
                {techUsed}
            </p>
        </div>

        <div className='flex gap-5 justify-center'>
            <a href={Repo} target="_blank" className='showmore-button'>
                <button >
                    GitHub Repo
                </button>
            </a>
            {Demo && (
            <a href={Demo} target="_blank" className='showmore-button flex justify-center'>
                <button>
                    Demo
                </button>
            </a>
            )}

        </div>
  </div>
  )
}

export default ShowMore