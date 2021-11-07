
import { Link } from "react-router-dom";
import cart from '../Images/cart.png'

function NavBar (){

    return(
    <div className="links">
    <ul className="listU">
    {/* <BrowserRouter> */}
       <li className="listl " ><Link to="/" className="listlA"> Home</Link> </li>
       <li className="listl" ><Link to="/wishList" className="listlA">Wish Item</Link></li>
       <li className="listR" ><Link to="/cart" className="listlA"> <img src={cart} className="imgCart"/></Link></li>
       <li className="listR"> <Link to="/signIn" className="listlA">Sign in </Link></li>
       <li className="listR listlA">Search</li>
       <li className="listR listlA" ><input type="text"  className="textNav"/></li>


       {/* </BrowserRouter> */}
       </ul>
       </div>
       )
}

export default NavBar