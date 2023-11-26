import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    const navOptions = <>
        <li><NavLink to="/">Student List</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 max-w-7xl mx-auto shadow-md mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">Student Admission</NavLink>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AppNavbar;