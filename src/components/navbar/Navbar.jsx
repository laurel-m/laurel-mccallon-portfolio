import "./navbar.scss"
// import { Email } from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">lm</a>
                {/* <div className="itemContainer">
                    <Email className="icon" />
                    <span>laurelmccallon@gmail.com</span>
                </div> */}
                </div>
            <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
            </div>
        </div>
    </div>
  )
}
