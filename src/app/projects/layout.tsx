import Header from '@/components/landing-page/header';
import React, { Children } from 'react'

interface ProjectPageLayoutProps {
    children : React.ReactNode;
}

const ProjectPageLayout:React.FC<ProjectPageLayoutProps> = ({children}) => {
  return (
    <main>
        <Header/>
        {children}
    </main>
  )
}

export default ProjectPageLayout