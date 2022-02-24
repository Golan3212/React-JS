import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul className='navigation'>
                    <li >
                        <Link className="navigation-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/Profile">Profile</Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/Chats"> Chats   </Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

           

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export default Layout;