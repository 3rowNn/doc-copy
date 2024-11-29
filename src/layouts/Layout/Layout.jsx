import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Navber from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout({ tab, setTab, setToken, role }) {
    return (
        <div>
            <Header />
            <Navber tab={tab} setTab={setTab} setToken={setToken} role={role} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
