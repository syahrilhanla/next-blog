import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = (props) => {
	return (
		<div>
			<Meta />
			<Navbar />
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>{props.children}</main>
			</div>
		</div>
	);
};

export default Layout;
