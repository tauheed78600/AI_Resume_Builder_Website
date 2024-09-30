import React, { useContext } from 'react'
import { resumeInfoContext } from '../../../context/ResumeInfoContext'
import PersonalDetails from './preview/PersonalDetails'

function ResumePreview() {

    const {resumeInfo, setResumeInfo} = useContext(resumeInfoContext)

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
        style = {{
            borderColor: resumeInfo?.personalDetails.themeColor
        }}>
        <PersonalDetails resumeInfo = {resumeInfo}/>


        </div>
    )
}

export default ResumePreview
