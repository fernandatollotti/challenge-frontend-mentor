import cartIcon from "../../assets/icon-cart.svg";
import "./styles.scss";

export default function Button() {
  return (
    <button className="btn-cart">
      <img src={cartIcon} alt="" />
      Add to Cart
    </button>
  );
}
