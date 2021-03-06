import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/login'>
						<h1>Logo In</h1>
					</Route>
					<Route path='/checkout' component={Checkout} />
					<Route path='/' component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
