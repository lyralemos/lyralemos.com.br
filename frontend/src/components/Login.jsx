import { useState } from 'react';
import {Buffer} from 'buffer';

import auth from '../api/auth'

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    
    
    const doLogin = async (e) => {
        e.preventDefault()
    
        const response = await auth.login(formData.username, formData.password)
        if (response.ok) {
            let claims = JSON.parse(Buffer.from(response.data.access_token.split('.')[1], 'base64').toString())
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('email', claims.email)
        }
    }
    
    return (
        <form onSubmit={doLogin}>
            <input 
                type="text" 
                placeholder="Username" 
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                value={formData.username}
                />
            <input 
                type="text" 
                placeholder="Password" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                />

            <button type="submit">Send</button>
        </form>
    )
}

export default Login