const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>BaceFook</h1>
            <div className="links">
                <a href="/SignUp">SignUp</a>
                <a href="/SignIn">SignIn</a>
                <a href="/">DashBoard</a>
            </div>
        </nav>
    );
}
 
export default Navbar;