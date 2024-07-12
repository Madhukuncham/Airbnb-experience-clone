//import logo from "../images/airbnb-logo.png";
export default function NavBar()
{
    return(
    
        <nav >
        <img className="nav--logo" src={process.env.PUBLIC_URL + '/images/airbnb-logo.png'} width="100px"  />
        </nav>
    
    )
};