
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function NavBar (){

    return(
    <div className="links">
    <ul className="listU">
    {/* <BrowserRouter> */}
       <li className="listl listlA" >Home </li>
       <li className="listl listlA" >Wish Item</li>
       <li className="listR listlA " > <img src="https://cdn-icons.flaticon.com/png/512/4647/premium/4647563.png?token=exp=1636274021~hmac=cd0e3610d429b309ba2f383126b39cbb" className="imgCart"/></li>
       <li className="listR listlA ">Sign in</li>
       <li className="listR listlA ">Search</li>
       <li className="listR listlA" ><input type="text"  className="textNav"/></li>


       {/* </BrowserRouter> */}
       </ul>
       </div>
       )
}

export default NavBar