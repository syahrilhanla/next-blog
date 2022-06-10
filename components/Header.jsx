import headerStyles from "../styles/Header.module.css";

const Header = () => {
	return (
		<div className={headerStyles.title}>
			<h1>
				<span>Pilkom</span> News
			</h1>
			<p className={headerStyles.description}>
				Kasak Kusuk Terpanas dari Gulag Terkutuk
			</p>
		</div>
	);
};

export default Header;
