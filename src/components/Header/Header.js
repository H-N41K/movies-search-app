import "./Header.css";
const Header = () => {
    return (
        <span onClick={() => {window.scrollTo(0,0)}}className="header">🎞 Movie &amp; TV Series DB 📺</span>
    )
}

export default Header;