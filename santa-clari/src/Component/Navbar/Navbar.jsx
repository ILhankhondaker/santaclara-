import './Navbar.css'
import logo from '../../img/logo1.png'
const Navbar = () => {
    return (
        <div>

            <div className="navbar uppercase  navcss text-xl z-40">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            <li><a href='#about'>About </a></li>
                            <li><a href='#spritss'>Our Sprits </a></li>
                            <li><a href='#process'>Our Process </a></li>

                            <li><a href='#tester-opinion' >Visitors and Testers opinion</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>

                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl lg:hidden" href=""><img className='w-20' src={logo} alt="" srcset="" /></a> */}
                    <a className="btn btn-ghost normal-case text-xl lg:hidden" href="">Santa Clara Distillery</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#about'>ABOUT </a></li>
                        <li><a href='#spritss'>Our Sprits </a></li>
                        <li><a href='#process'>Our Process </a></li>
                        <li><a href='#tester-opinion' >Visitors and Testers opinion</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Get started</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;