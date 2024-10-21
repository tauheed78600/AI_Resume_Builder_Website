import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
import { resumeInfoContext } from '../../../../context/ResumeInfoContext'
import { useAsyncError, useParams } from 'react-router-dom'
import GlobalAPI from '../../../../../service/GlobalAPI'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

function PersonalDetails({enablenext}) {

    const params  = useParams()

    const {resumeInfo, setResumeInfo} = useContext(resumeInfoContext);

    const [formData, setFormData] = useState()
    const [loading, setLoading] = useState(false)
    

    const handleInputChange = (e) =>{
        enablenext(false)
        const {name, value} = e.target; 

        setFormData({
            ...formData,
            [name]:value
        })

        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
    }

    useEffect(()=>{
        console.log("params in line 24 forms pd", params)
    }, [])

    const onSave=(e)=>{
        
        e.preventDefault();
        setLoading(true)
        const data = {
            data: formData
        }
        console.log(params.resumeid)
        GlobalAPI.updateResumeDetail(params.resumeid, data).then(resp=>{
                console.log("returned Response")
                enablenext(true)
                setLoading(false)
                toast("Details Saved")
        },(error)=>{
            setLoading(false)
        })
    }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Details</h2>
      <p>Get Started with basic information</p>
        <form onClick = {onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name = "firstName" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input name = "lastName" required onChange={handleInputChange}/>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input name = "jobTitle" required onChange={handleInputChange}/>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input name = "address" required onChange={handleInputChange}/>
                </div>
                <div >
                    <label className='text-sm'>Phone Number</label>
                    <Input name = "number" required onChange={handleInputChange}/>
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input name = "email" required onChange={handleInputChange}/>
                </div>
                <div className='mt-3 flex justify-end'>
                    <Button 
                    disabled ={loading}
                    type = "submit">{loading? <LoaderCircle className='animate-spin'/>: 'Save'}</Button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetails