import Button from "../Button";
import desktopImage from "../../assets/image-product-desktop.jpg";
import mobileImage from "../../assets/image-product-mobile.jpg";
import "./styles.scss";

export default function Card() {
  return (
    <div className="card">
      <div className="thumbnail">
        <picture>
          <source media="(min-width: 992px)" srcSet={desktopImage} />
          <img src={mobileImage} alt="Gabrielle Essence Eau De Parfum perfume" />
        </picture>
      </div>
      <div className="card-body">
        <span className="category">Perfume</span>
        <h3 className="heading">Gabrielle Essence Eau De Parfum</h3>
        <p className="text">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="prices">
          <div className="price-discount">$149.99</div>
          <div className="price-original">$169.99</div>
        </div>
        <Button />
      </div>
    </div>
  );
}
