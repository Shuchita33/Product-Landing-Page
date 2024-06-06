import '../navbar/navbar.css';
import logo from '../../assets/logo.jpg';
export const NavBar=()=>{
    const activeStyle = ({ isActive }) => ({
        color: isActive ? "var(--primary-color)" : "black",
        textDecoration: "none",
      });
    return(
        <>
      <div className="top-bar">
        Sign up and get exclusive offers.
        <i  className="fa-solid fa-xmark"></i>
      </div>
      <div className="nav">
        <div className="navbar">
          <img  src={logo} alt="logo"/>
          <div className="nav-options">
            <p>HOME</p>
            <p>SHOP</p>
          </div>
          <div className="nav-navigate">
            <div>
              <i className="fa-solid fa-magnifying-glass"
                style={{ color: "#98999a" }} ></i>
              <input placeholder="Search"/>
            </div>
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="badge"></p>
            <i className="fa-solid fa-heart"></i>
            <p className="badge"></p>
           <button
                className="login-icon">
                <i className="fa-regular fa-user"></i>
            </button>
            <button className="login-icon" >
                <i className="fa-regular fa-user"></i>
            </button>         
          </div>
        </div>

        <div className="search-bar" >
          <i className="fa-solid fa-magnifying-glass"
            style={{ color: "#98999a" }}></i>
          <input
            placeholder="Search"/>
        </div>
      </div>
    </>
    )
}