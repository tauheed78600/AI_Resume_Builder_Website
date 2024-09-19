import React from 'react'
import { NotebookIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function ResumeItem({resume}) {
    console.log("inside resumeItem component")
  return (
    <div>
     <Link to={"/dashboard/resume/"+resume.resumeid+"/edit"}>
     <div>
        <div className='p-14 bg-secondary flex items-center justify-center h-[280px]
         border-primary rounded-large hover:scale-110 transition-all hover: shadow-md shadow-primary'>
            <NotebookIcon/>
        </div>
        <h2 className='text-center my-1'>{resume.title}</h2>
     </div></Link>
    </div>
  )
}

export default ResumeItem