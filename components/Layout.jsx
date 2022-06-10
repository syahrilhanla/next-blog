import styles from "../styles/Layout.module.css";

const Layout = (props) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
