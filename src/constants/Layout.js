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
                        <Link className="navigation-link" to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/chats"> Chats   </Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/gists"> Gists   </Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;