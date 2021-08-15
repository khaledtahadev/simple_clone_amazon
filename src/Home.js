import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
	return (
		<div className='Home'>
			<img
				className='Home__Image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-YWQwMDMxOTUt-w1242._CB414662894_SY300_.jpg'
				alt=''
			/>
			<div className='product_Row'>
				<Product
					id={1}
					title='new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming'
					price={520}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
				/>
				<Product
					id={2}
					title='new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming'
					price={520}
					rating={5}
					image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
				/>
			</div>
			<div className='product_Row'>
				<Product
					id={3}
					title='new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming'
					price={10}
					rating={3}
					image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
				/>
				<Product
					id={4}
					title='new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming'
					price={50}
					rating={4}
					image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
				/>
				<Product
					id={5}
					title='new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming'
					price={56}
					rating={3}
					image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
				/>
			</div>
			<div className='product_Row'>
				<Product
					id={6}
					title='new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming new Products Comming Products Comming'
					price={20}
					rating={2}
					image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
				/>
			</div>
		</div>
	);
};

export default Home;
