import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './layouts/Layout/Layout';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Document from './pages/Document/Document';
import Import from './pages/Document/Import';
import Report from './pages/Report/Report';
import Login from './pages/Login/Login';
import About from './pages/about/about';

// import components
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// import styles
import './App.css';

const intTab = 'home';

function App() {
    const [token, setToken] = useState(' ');
    const [role, setRole] = useState(''); // Role ที่เป็นอยู่ 'admin' or 'user'
    const [tab, setTab] = useState(' ');
    const [todosRaw, setTodosRaw] = useState([]);  // เก็บข้อมูลเอกสารทั้งหมด

    useEffect(() => {
        setTab(intTab);
    }, []); // first load

    // ฟังก์ชันในการเพิ่มเอกสารใหม่
    const addTodo = (newTodo) => {
        setTodosRaw((prevTodos) => [...prevTodos, newTodo]);
    };

    // ถ้าไม่มี token ให้แสดงหน้าล็อกอิน
    if (token === ' ') {
        return <Login setToken={setToken} setRole={setRole} />;
    } else {
        return (
            <div className='app-container'>
                <HashRouter>
                    <Routes>
                        <Route element={<Layout tab={tab} setTab={setTab} setToken={setToken} role={role} />}>
                            {/* เส้นทางUser */}
                            <Route path='/' element={<Home />} />
                            <Route path='/Home' element={<Home />} />
                            <Route path='/Report' element={<Report />} />
                            <Route path='/Login' element={<Login />} />
                            <Route path='/Document' element={<Document todosRaw={todosRaw} setTodosRaw={setTodosRaw} />} />
                            <Route path='/import' element={<Import addTodo={addTodo} setTodosRaw={setTodosRaw} />} />
                            <Route path='/members' element={<members />} />
                            <Route path='/about' element={<About />} />

                            {/* เฉพาะ Admins */}
                            {role === 'admin' && (
                                <>
                                    <Route path='/import' element={<Import addTodo={addTodo} setTodosRaw={setTodosRaw} />} />
                                    <Route path='/Admin' element={<Admin />} />
                                </>
                            )}
                        </Route>
                    </Routes>
                </HashRouter>
            </div>
        );
    }
}

export default App;
