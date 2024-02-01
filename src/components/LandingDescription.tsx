import React from 'react'

type LandingDescriptionProps = {
    content: string;
}

const LandingDescription:React.FC<LandingDescriptionProps> = ({ content }) => {
  return (
    <p
        className='
        text-sm
        md:text-xl
        ml-3
        mt-10
        lg:ml-[10%]
        lg:mr-[5%]
        lg:text-left
        '
    >
        {content}
    </p>
  )
}

export default LandingDescription;