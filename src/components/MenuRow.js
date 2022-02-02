import React, { Component } from 'react';

class MenuRow extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const menuHeader = this.props.menu.map(foodItem => {
            return(
                <div key={foodItem.id} className="col-md-8">
                    <h3>
                        {foodItem.category}
                    </h3>               
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {menuHeader}
                </div>
            </div>
            
            
        );
    }
}

export default MenuRow;