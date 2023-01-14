import { Link } from "react-router-dom";

export default function FourOFour() {
	return (
		<>
			<header>
				<h1>404</h1>
				<p>
					<Link to="/">Go back to the podcast</Link>
				</p>
			</header>
		</>
	);
}
