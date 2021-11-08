import { Link } from "react-router-dom"
import "../styleFiles/Footer.css"

function Footer(){

return(
        <footer>
            <div className="gridfooter">
                <p className="ppp"><Link to="/" className="ppp">Author: Hege Refsnes</Link></p>
                <p className="ppp2">Author: Hege Refsnes</p>
                </div>
        </footer>
        )

}

export default Footer