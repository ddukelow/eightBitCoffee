import React, { Component } from "react";

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      imgOpacity: 1,
      textOpacity: 0,
    };
  }

  render() {
    const { item } = this.state;
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
}

export default ShopItem;
