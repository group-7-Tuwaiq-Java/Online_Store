import cart from '../Images/cart.png'

function NavBar (){

    return(
    <div className="links">
    <ul className="listU">
    {/* <BrowserRouter> */}
       <li className="listl listlA" >Home </li>
       <li className="listl listlA" >Wish Item</li>
       <li className="listR listlA " > <img src={cart} className="imgCart"/></li>
       <li className="listR listlA ">Sign in</li>
       <li className="listR listlA ">Search</li>
       <li className="listR listlA" ><input type="text"  className="textNav"/></li>


       {/* </BrowserRouter> */}
       </ul>
       </div>
       )
}

export default NavBar