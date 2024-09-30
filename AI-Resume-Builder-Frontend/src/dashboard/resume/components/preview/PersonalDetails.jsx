import React from 'react'

function PersonalDetails({resumeInfo}) {
    console.log("reuf wrknr", resumeInfo)
    return (
        <div>
        <h2 className='font-bold text-xl text-center'>
            {resumeInfo?.personalDetails.fullName}</h2>
        <h2 className='text-center text-sm font-medium'>
            {resumeInfo?.experience[0].jobTitle}</h2>
        </div>
    )
}

export default PersonalDetails
