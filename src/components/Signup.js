import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {

    const [userdata, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        profession: ''
    })
    const navigate = useNavigate()
    function handleChange(e) {
        setUserData({ ...userdata, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(userdata))
        alert('Signup successfull!')
        navigate('/login')
    }
    return (
        <div className='form-container'>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} >
                <input type='text' name='name' placeholder='Name' value={userdata.name} onChange={handleChange} required />
                <input type='password' name='password' placeholder='Password' value={userdata.password} onChange={handleChange} required />
                <input type='email' name='email' placeholder='Email' value={userdata.email} onChange={handleChange} required />
                <input type='text' name='phone' placeholder='Phone' value={userdata.phone} onChange={handleChange} required />

                <select name='profession' value={userdata.profession} onChange={handleChange} required>

                    <option value=""  >Select profession</option>
                    <option value="developer"  >Developer</option>
                    <option value="designer" >Designer</option>
                    <option value="manager" >Manager</option>

                </select>
                <button type='submit'>Signup</button>
                <Link to="/login">Already have an account? Login</Link>
            </form>

        </div>
    )
}

export default Signup