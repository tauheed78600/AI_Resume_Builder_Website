import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
import { resumeInfoContext } from '../../../../context/ResumeInfoContext'


function Education() {

    const [educationList, setEducationList] = useState([])
    const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);
    const params = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        resumeInfo?.education.length > 0 && setEducationList(resumeInfo?.education);
    }, []);

    const handleChange = (index, event) => {
        const newEntries = educationList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setEducationList(newEntries);
    }

    const onSave = async(e)=>{
        e.preventDefault(); 
    }
    
    const addEducation = ()=>{
        setEducationList([...educationList, {
            degree: '',
            description: '',
            major: '',
            state: '',
            startDate: '',
            endDate: '',
            universityName: '',
        }]);
    }

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            education: educationList
        });
    }, [educationList]);
    
    const removeEducation = () =>{
        setEducationList(educationList => educationList.slice(0, -1));
    }


  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Education Details</h2>
      <p>Enter your Education Details here</p>
      <form onSubmit={onSave}>
        {educationList.map((edu, index) => (
            <div key={index} className='gap-3 border p-3 my-5 rounded-lg'>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-xs'>Enter your Degree name</label>
                        <Input name="degree" onChange={(event) => handleChange(index, event)} type="text" placeholder="Ex: XYZ University" value={edu.degree} />
                    </div>
                    <div>
                        <label className='text-xs'>Enter CGPA</label>
                        <Input name="cgpa" onChange={(event) => handleChange(index, event)} type="text" placeholder="Ex: 8.9" value={edu.cgpa} />
                    </div>
                </div>
                <div>
                    <label className='text-xs'>Enter Branch</label>
                    <Input name="branch" onChange={(event) => handleChange(index, event)} type="text" placeholder="Ex: CSE" value={edu.branch} />
                </div>
                <div>
                    <label className='text-xs'>Enter College/University name</label>
                    <Input name="universityName" onChange={(event) => handleChange(index, event)} type="text" placeholder="Ex: XYZ University" value={edu.universityName} />
                </div>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-xs'>Enter Start Date</label>
                        <Input name="startDate" onChange={(event) => handleChange(index, event)} type="date" value={edu.startDate} />
                    </div>
                    <div>
                        <label className='text-xs'>Enter End Date</label>
                        <Input name="endDate" onChange={(event) => handleChange(index, event)} type="date" value={edu.endDate} />
                    </div>
                </div>
            </div>
        ))}
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <Button type="button" variant="outline" onClick={addEducation} className="text-primary">+ Add More Education</Button>
                <Button type="button" variant="outline" onClick={removeEducation} className="text-primary">- Remove Education</Button>
            </div>
        </div>
</form>

    </div>
  )
}

export default Education
