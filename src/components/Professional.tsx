import React from 'react'

function Professional() {
  return (
    <div className='mt-10'>
      <div className='font-bold text-xl pb-5'>
        Professional
      </div>
      <div className='mb-10'>
        A versatile software engineer with expertise in database management, front-end, and back-end technologies, deeply passionate about contributing to every facet of the software development life-cycle.
      </div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-2' style={{ width: '90%'}}>
          <div className='col-span-1 col-start-1'>
            Nov 2022 - Present
          </div>
          <div className='col-span-1 col-start-2'>
            Software Engineer @ McKinsey & Company
          </div>
       

          <div className='col-span-1 col-start-1'>
            Jan 2021 - Nov 2022
          </div>
          <div className='col-span-1 col-start-2'>
            Software Engineer @ Squamish.RealEstate
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professional
