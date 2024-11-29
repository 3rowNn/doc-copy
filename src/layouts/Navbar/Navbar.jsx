import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ tab, setTab, setToken, role }) {
    return (
        <div className='navbar-container'>
            <Link to={'/home'}>
                <button className={'btn ' + (tab === 'home' ? 'btn-dark' : 'btn-outline-secondary')}
                    onClick={() => setTab('home')}
                >
                 Home
                </button>
            </Link>

            {/* แสดงปุ่ม Administrator เฉพาะเมื่อ role เป็น 'admin' */}
            {role === 'admin' && (
                <Link to={'/admin'}>
                    <button className={'btn ' + (tab === 'admin' ? 'btn-dark' : 'btn-outline-secondary')}
                        onClick={() => setTab('admin')}
                    >
                        Administrator
                    </button>
                </Link>
            )}

            {/* แสดงปุ่ม Document Management สำหรับทั้ง 'admin' และ 'user' */}
            <Link to={'/document'}>
                <button className={'btn ' + (tab === 'document' ? 'btn-dark' : 'btn-outline-secondary')}
                    onClick={() => setTab('document')}
                >
                    Document Management
                </button>
            </Link>

            <Link to={'/report'}>
                <button className={'btn ' + (tab === 'report' ? 'btn-dark' : 'btn-outline-secondary')}
                    onClick={() => setTab('report')}
                >
                    Report
                </button>
            </Link>

            <Link to={'/About'}>
                <button className={'btn ' + (tab === 'About' ? 'btn-dark' : 'btn-outline-secondary')}
                    onClick={() => setTab('About')}
                >
                    About Dev
                </button>
            </Link>

            <button className='logout-btn' onClick={() => setToken(' ')}>
                Logout
            </button>
        </div>
    );
}

export default Navbar;
