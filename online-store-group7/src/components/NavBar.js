import "../styleFiles/navBar.css"
import { Link } from "react-router-dom";
import cart from '../Images/cart.png';
import { useSelector } from "react-redux";
import { ChangeLogged } from "./reducers/IsLogged/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SearchAction } from "./reducers/search/action";

function NavBar (){
  // const [admin, setAdmin] = useState(false)

  const [searchTxt,setSearch ] = useState()
    const dispatch = useDispatch()
    const logged = useSelector((state)=>{
        return {
          users:state.IsLogged,
        }
      })

      const Admin = useSelector((state)=>{
        return {
          admin:state.AdminReducer.state.isAdmin,
        }
      })
      console.log(Admin);

      function LogOut(){
        const checkIfLogged={
            userName:undefined,
            isLogged:!logged.users
          }
          // setAdmin(false)
          
          const action = ChangeLogged(checkIfLogged)
          dispatch(action)
      }
      function SendToSearchRed(){
        const action4 = SearchAction(searchTxt)
        dispatch(action4)
      }

    return(
    <div className="links">
    <ul className="listU">
    {/* <BrowserRouter> */}
       <li className="listl " ><Link to="/" className="listlA"> Home</Link> </li>
       {logged.users.isLogged&&<li className="listl listlA" >{logged.users.userLoggedIn}</li>}
       { Admin.admin && <Link to="/adminPage"> <li className="listl listlA" >Admin Page</li> </Link>}
      {logged.users.isLogged&& <li className="listl" ><Link to="/wishList" className="listlA">Wish Item</Link></li>}
       {logged.users.isLogged&& <li className="listR" ><Link to="/cart" className="listlA"> <img src={cart} className="imgCart"/></Link></li>}
       {!logged.users.isLogged && <li className="listR" > <Link to="/signIn" className="listlA" >Sign in </Link></li>}
       {logged.users.isLogged&&<li className="listR" ><Link className="listlA" to="/signIn" onClick={LogOut}> Sign out</Link></li>}
      <Link to="/search" onClick={SendToSearchRed}> <li className="listR listlA">Search</li></Link>
       <li className="listR listlA" ><input type="text"  className="textNav" onChange={(e)=>setSearch(e.target.value)}/></li>


       {/* </BrowserRouter> */}
       </ul>
       </div>
       )
}

export default NavBar