import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate(); 

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     console.log('Login clicked');
        
    //     setTimeout(() => {
    //         navigate('/main'); 
    //     }, 1000);
    // };
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/main");
      }, [user, loading]);

    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Login</h2>
                <form  onClick={() => logInWithEmailAndPassword(email, password)}>
                    <label style={styles.label}>Enter Email</label>
                    <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} style={styles.input}/>
                    <label style={styles.label}>Enter Password</label>
                    <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} style={styles.input}/>
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

const styles = {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    container: {
        padding: '20px',
        width: '400px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        height:'300px'
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        textAlign: 'center',
    },
    label: {
        marginBottom: '5px',
        fontSize: '16px',
    },
    input: {
        marginBottom: '15px',
        padding: '8px',
        fontSize: '14px',
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
    },
};
