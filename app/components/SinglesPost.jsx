// Environment
import React from 'react';
import Image from 'next/image';



// Assets






const SinglesPost = ({src, alt}) => {



  return (
    <div className='singlespost-container'>
        <div className='singlepost-hover'>
            <p>
                {alt}
            </p>
        </div>
        <div >
            <Image className='singlepost-image'
            src={src} 
            alt={alt}
            width={1000} 
            height={1000}
            loading='lazy'
            />
        </div>
    </div>
  )
}

export default SinglesPost