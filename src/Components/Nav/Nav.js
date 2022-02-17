import React from "react"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './Nav.css'

const Nav =()=> {
    return(
        <div className="nav">
            <h1 className="store_name">Fake Store</h1>
            <div className="nav__search">
				<input className="nav__searchInput" type="text" />
				<div className="nav__searchIcon">
					<SearchIcon />
					Search
				</div>
			</div>
            <div className="nav__nav">
			
       <div className="nav__optionBasket">
                    <span className="nav__optionLineTwo nav__basketCount">
                        
                    </span>
                    <ShoppingCartIcon />
                </div>
            
        </div>

        </div>
    )
}
export default Nav;