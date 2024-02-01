import React from 'react'

type HeaderProps = {
    title: string;
}

const Header:React.FC<HeaderProps> = ({ title }) => {
  return (
    <h2
     className='
        text-xl
        md:text-4xl
        ml-3
        lg:ml-[10%]
        text-center
        lg:text-left
        font-semibold
    '
    >
        {title}
    </h2>
  )
}

export default Header;