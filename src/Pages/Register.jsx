import React from 'react'

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);


};

const SignUp = () => {
  return (
    <section className='flex justify-center flex-col px-4 py-14 z-50'>
      <div className='max-w-[450px] w-full mx-auto bg-black/80 text-white'>
        <div className='py-10 px-5 lg:px-10'>
          <h1 className='mb-6 font-bold text-center uppercase text-xl'>
            Sign Up
          </h1>

          <form className='flex flex-col w-full' onSubmit={handleSubmit}>
          <div className='mb-5'>
              <p className='text-white mb-2'>Email</p>

              <input type="text" className='w-full p-2 text-black' placeholder='email' />
            </div>

            <div className='mb-5'>
              <p className='text-white mb-2'>Username</p>

              <input type="text" className='w-full p-2 text-black' placeholder='johndoe' />
            </div>

            <div className='mb-5'>
              <p className='text-white mb-2'>Password</p>

              <input type="password" className='w-full p-2 text-black' placeholder='password' />
            </div>

            <div className='mt-7'>
              <button type="submit" className='bg-red-700 py-2 font-bold px-4 hover:bg-red-500 w-full'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp