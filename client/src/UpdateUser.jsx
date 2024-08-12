import React from 'react'

const UpdateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
    <div className="w-50 bg-white rounded p-3">
      <form action="">
          <h1>Update User</h1>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='enter name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='enter name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='enter name' className='form-control' />
          </div>
          <button className='btn btn-success'>Update</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser
