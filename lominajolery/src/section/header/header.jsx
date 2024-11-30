import { assets } from "../../assets/assets";
import "./header.css";
const Header = () => {
  return (
    <div className="main-header-div">
      <div className="left-section">
        <div className="title-div">WELCOME TO JEWELERY WORLD</div>
        <div className="discription">
          <p>
            Our exquisite creations, spanning from timeless jewelry <br />
            to distinctive fragrances, convey a resounding message
            <br /> of love.
          </p>
          <button>
            VIEW COLLECTIONS
            <img src={assets.flesh} />
          </button>
        </div>
      </div>
      <div className="right-section">
        <img src={assets.headerpic} alt="" />
      </div>
    </div>
  );
};

export default Header;
