import React, {useState} from 'react'
import { NavBar } from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useNavigate } from 'react-router-dom'

const Register = ()=>{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function onSubmit(e){
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')||'[]')
    users.push({id:Date.now(), name, email, password})
    localStorage.setItem('users', JSON.stringify(users))
    navigate('/')
  }

  return (
    <div>
      <NavBar />
      <div className='contain max-w-md mx-auto mt-10 p-6 bg-[#1f2225] rounded'>
        <h2 className='text-2xl mb-4'>Create an account</h2>
        <form onSubmit={onSubmit} className='flex flex-col gap-3'>
          <input required placeholder='Full name' value={name} onChange={e=>setName(e.target.value)} className='p-2 rounded bg-[#262931]' />
          <input required type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} className='p-2 rounded bg-[#262931]' />
          <input required type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} className='p-2 rounded bg-[#262931]' />
          <button className='page-box mt-2' type='submit'>Register</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Register
