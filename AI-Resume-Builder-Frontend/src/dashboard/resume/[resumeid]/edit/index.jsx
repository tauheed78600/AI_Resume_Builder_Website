import { CloudHail } from 'lucide-react';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import dummy from '../../../../data/dummy';
import { resumeInfoContext } from '../../../../context/ResumeInfoContext';

function EditResume() {
    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState()

    useEffect(()=>{
        setResumeInfo(dummy)
    }, [])

    return (
        <resumeInfoContext.Provider value = {{resumeInfo, setResumeInfo}}>
        <div className='grid grid-cols-2 md: p-10 gap-10'>
            <FormSection/>
            <ResumePreview/>
        </div>
        </resumeInfoContext.Provider>
    )
}

export default EditResume
