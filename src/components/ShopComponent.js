import React, { Component } from 'react';


class Shop extends Component {
  constructor(props) {
    super(props);
    this.shopHover = this.shopHover.bind(this);
  }
  
  shopHover()

  shopItem(shop) {
    return(
      <div className="container mt-5 text-center">
        <div className="row mb-5">
          {shop.map(shop =>
            <div className="col-md-4" key={shop.id}>
                <a class="btn shop-8Bit-btn" onMouseEnter={() => {console.log("Event:MouseEnter");}} href="#" role="button">
                    <img src={require(`../../public/assets/images/${ shop.imgSrc }.jpg`)} width="100%" alt={shop.alt} />
                    <p class="shop-txt">{shop.description}<br />{shop.price}</p>
                </a>
                <p class="d-md-none txt-120">{shop.description}<br />{shop.price}</p>
            </div>
            )}
        </div>
      </div>
      )
  } 

  render() {
    return (
        <div>
          {this.shopItem(this.props.shop)}
        </div>
    );
  }
}

export default Shop;
