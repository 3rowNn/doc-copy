import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { verifyUser } from '../../data/users';

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = () => {
        const user = userRef.current.value.trim();
        const pass = passRef.current.value.trim();
        userRef.current.value = '';
        passRef.current.value = '';
        const userInfo = verifyUser(user, pass);
        if (userInfo === null) {
            alert('Wrong username or password');
            userRef.current.focus();
        } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin(); // ล็อกอินเมื่อกด Enter
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
            <img src="/doc-copy/metthier2.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />


                <h2 className='mb-5'>Login</h2>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control
                    type='text'
                    id='username'
                    placeholder='user'
                    style={{ textAlign: 'center' }}
                    ref={userRef}
                    onKeyDown={handleKeyDown} 
                />

                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    id='password'
                    placeholder='pass'
                    style={{ textAlign: 'center' }}
                    ref={passRef}
                    onKeyDown={handleKeyDown} 
                />

                <button 
                    className='btn btn-success mt-3'
                    onClick={handleLogin}    
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
