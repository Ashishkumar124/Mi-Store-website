import {useRef} from "react"
import { FiShoppingCart } from 'react-icons/fi';
import '../PreNavbar/PreNavbar.css';
import { IoCloseSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";


const PreNavbar = () => {
const navRef = useRef();

const showNavbar = () => {
navRef.current.classList.toggle("responsive_nav");
}

  return (
    <header>
      <nav ref={navRef}>
        <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ⌣</a>
        </nav>
        <nav ref={navRef}>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
        <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN&source=&region=IN&sid=i18n_in_pc_pro&qs=callback%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%25252F%25252Fwww.mi.com%25252Fin%25252F%2526sign%253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%252C%252C%26sid%3Di18n_in_pc_pro%26_locale%3Den_IN&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_uRegion=IN">SIGN UP</a> <span>|</span>
        <a className="cart" href="https://store.mi.com/in/cart">
          <FiShoppingCart fontSize={20} color="white" />
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
<IoCloseSharp />
</button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <IoIosMenu/>
        </button>


    </header>
  );
};

export default PreNavbar;
