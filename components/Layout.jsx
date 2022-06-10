import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout = (props) => {
	return (
		<div>
			<Navbar />
			<div className={styles.container}>
				<main className={styles.main}>{props.children}</main>
			</div>
		</div>
	);
};

export default Layout;
