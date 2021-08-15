import React from "react";
import { BasketContext } from "./Provider";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket as Basket } from "@material-ui/icons";
import "./Header.css";

const Header = () => {
	const [{ Basket: bask }] = BasketContext();

	return (
		<nav className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='img'
				/>
			</Link>

			<div className='header__search'>
				<input type='text' className='header__searchInput' />
				<Search className='header__SearchIcon' />
			</div>

			<div className='header__Navbar'>
				<Link to='./login' className='header__Link'>
					<span>Hello Khaled</span>
					<span className='header__LinkLineTwo'>Sing In</span>
				</Link>
				<Link to='' className='header__Link'>
					<span>Return</span>
					<span className='header__LinkLineTwo'>& Orders</span>
				</Link>
				<Link to='' className='header__Link'>
					<span>Your</span>
					<span className='header__LinkLineTwo'>Prime</span>
				</Link>
			</div>

			<Link to='/checkout' className='header__Basket'>
				<Basket className='header__BasketIcon' />
				<span>{bask.length}</span>
			</Link>
		</nav>
	);
};

export default Header;
