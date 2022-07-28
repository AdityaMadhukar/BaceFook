const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>BaceFook</h1>
            <div className="links">
                <a href="/BaceFook/SignUp">SignUp</a>
                <a href="/BaceFook/SignIn">SignIn</a>
                <a href="/BaceFook/">DashBoard</a>
            </div>
        </nav>
    );
}
 
export default Navbar;