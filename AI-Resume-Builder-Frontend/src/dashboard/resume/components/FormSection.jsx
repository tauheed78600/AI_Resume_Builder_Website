import React, { useContext, useState } from 'react'
import PersonalDetails from './forms/PersonalDetails'
import { resumeInfoContext } from '../../../context/ResumeInfoContext'
import { ArrowBigLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { useSearchParams } from 'react-router-dom'
import Objective from './forms/Objective'
import Experience from './forms/Experience'
import Education from './forms/Education'

function FormSection() {

  const {resumeInfo, setResumeInfo} = useContext(resumeInfoContext)
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enablenext, setEnablenext] = useState(false)

  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant = 'outline' size="sm" className='flex gap-2'><LayoutGrid/>Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && <Button size = "sm"
          onClick = {()=>setActiveFormIndex(activeFormIndex - 1)}
          ><ArrowBigLeft/></Button>}
          <Button size = "sm" className="flex gap-2"
          disabled = {!enablenext}
          onClick = {()=>setActiveFormIndex(activeFormIndex + 1)}
          >Next<ArrowRight/></Button>
        </div>
      </div>
      {/* Personal Details */}
     {activeFormIndex == 1? <PersonalDetails enablenext = {(v)=>setEnablenext(v)}/>:
      activeFormIndex == 2? <Objective enablenext = {(v)=>setEnablenext(v)}/>:
      activeFormIndex == 3? <Experience enablenext = {(v)=>setEnablenext(v)}/>:
      activeFormIndex == 4? <Education enablenext = {(v)=>setEnablenext(v)}/>
      :null}
    </div>
  )
}

export default FormSection
