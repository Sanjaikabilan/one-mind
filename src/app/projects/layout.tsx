import Header from '@/components/landing-page/header';
import { getProjects } from '@/lib/supabase/queries';
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