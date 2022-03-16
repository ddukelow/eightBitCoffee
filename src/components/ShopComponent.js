import React, { Component } from "react";
import ShopItem from "./ShopItemComponent";

class Shop extends Component {
  constructor(props) {
    super(props);
  }

  eachShopItem(item) {
    return (
      <>
        <a
          className="btn shop-8Bit-btn"
          onMouseOver={() => {
            this.setState({
              imgOpacity: 0.5,
              textOpacity: 1,
            });
          }}
          onMouseOut={() => {
            this.setState({
              imgOpacity: 1,
              textOpacity: 0,
            });
          }}
          href="#"
          role="button"
        >
          <img
            src={require(`../../public/assets/images/${item.imgSrc}.jpg`)}
            style={{ opacity: this.state.imgOpacity }}
            width="100%"
            alt={item.alt}
          />
          <p className="shop-txt" style={{ opacity: this.state.textOpacity }}>
            {item.description}
            <br />
            {item.price}
          </p>
        </a>
        <p className="d-md-none txt-120">
          {item.description}
          <br />
          {item.price}
        </p>
      </>
    );
  }

  shopItems(shop) {
    return (
      <div className="container mt-2 text-center">
        <div className="row mb-5">
          {shop.map((item) => {
            return (
              <div className="col-md-4" key={shop.id}>
                <ShopItem item={item} />
                {/* {this.eachShopItem(item)} */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.shopItems(this.props.shop)}</div>;
  }
}

export default Shop;
