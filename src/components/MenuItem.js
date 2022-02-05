import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }


    menuSlot(items) {
        return(
            <div className="row">
                <div className="col">
                    {items.map( item => 
                        <div className='container'>
                            <div className='row'>
                                <div className="col-md-12" key={item.id}>
                                    <h3>{item.category}</h3>
                                    <div className="container">
                                        {item.item.map(singleItem =>
                                            <div key={singleItem.id} className='row'>
                                                <div className='col-md-4'>
                                                    <div className="container">
                                                        {(singleItem.colTestIndex === "1") ?
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-8 text-left'>
                                                                        {singleItem.title}
                                                                    </div>
                                                                    <div className='col-4 text-right'>
                                                                        {singleItem.price}                                                
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-12 text-left'>
                                                                        {singleItem.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            null}
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="container">
                                                    {(singleItem.colTestIndex === "2") ?
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-8 text-left'>
                                                                        {singleItem.title}
                                                                    </div>
                                                                    <div className='col-4 text-right'>
                                                                        {singleItem.price}                                                
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-12 text-left'>
                                                                        {singleItem.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            null}
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="container">
                                                        <div className='row'>
                                                            <div className='col-8 text-left'>
                                                                {(singleItem.colTestIndex === "3") ? singleItem.title:null}
                                                            </div>
                                                            <div className='col-4 text-right'>
                                                                {(singleItem.colTestIndex === "3") ? singleItem.price:null}                                                
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-12 text-left'>
                                                                {(singleItem.colTestIndex === "3") ? singleItem.description:null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                </div>
                            </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="container">
                    {this.menuSlot(this.props.menu)}                
            </div>
        )
    }
}

export default MenuItem;