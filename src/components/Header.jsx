import logo from "../Assets/Logo.png"
function Header() {
    return ( 
        <>
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
        </>
     );
}

export default Header;