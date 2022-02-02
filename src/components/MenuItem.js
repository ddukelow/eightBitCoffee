import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    menuSlot(items) {
        return(
            <div>
            {items.map( item => 
                <div className="col-md-12" key={item.id}>
                    <h3>{item.category}</h3>
                        {item.item.map(singleItem =>
                        
                            <p key={singleItem.id}>
                                {singleItem.title}
                            </p>
                        
                        )}
                </div>    
            )}
            </div>
        )
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    {this.menuSlot(this.props.menu)}
                </div>
            </div>
        )
    }
}

export default MenuItem;