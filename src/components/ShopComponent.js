import React, { Component } from "react";
import ShopItem from "./ShopItemComponent";

class Shop extends Component {
  constructor(props) {
    super(props);
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
