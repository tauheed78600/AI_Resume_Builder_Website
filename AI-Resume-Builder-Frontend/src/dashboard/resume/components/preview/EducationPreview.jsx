import React, { useContext } from 'react'
import { resumeInfoContext } from '../../../../context/ResumeInfoContext'

function EducationPreview() {

    const {resumeInfo, setResumeInfo} = useContext(resumeInfoContext)
    console.log("resumeInfo in EducationPreview", resumeInfo)

  return (
    <div>
      {/* {resumeInfo?.education[0].startDate} */}
    </div>
  )
}

export default EducationPreview
