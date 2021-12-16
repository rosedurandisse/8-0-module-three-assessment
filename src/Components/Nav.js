import { Component } from "react";
import { Link } from "react-router-dom";
import BlackPantherImage from './BlackPantherImage.jpeg'

class Nav extends Component {

    render() {
        return (
            <nav>
                <div>
                    <div>
                        <Link to='/'>
                            <img src={BlackPantherImage} alt='Black-Panther' height='50px' width='50px'></img>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to='/movies'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/people'>People</Link>
                        </li>
                        <li>
                            <Link to='locations'>Locations</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;