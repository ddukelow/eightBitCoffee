import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }


    menuSlot(items) {
        return(
            <div className="row">
                    {items.map( item => 
                        <div className="col-md-12" key={item.id}>
                            <h3>{item.category}</h3>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md'>
                                        <div className="container">
                                            {item.item.map(singleItem =>
                                            <React.Fragment key={singleItem.id}>
                                                {(singleItem.colTestIndex === "1") ?
                                                    <div>
                                                        <div className='row'>
                                                            <div className='col-8 text-left'>
                                                                <h5>{singleItem.title}</h5>
                                                            </div>
                                                            <div className='col-4 text-right'>
                                                                <h5>{singleItem.price}</h5>                                                
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-12 text-left'>
                                                                <p>{singleItem.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                null}
                                            </React.Fragment>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-md'>
                                        <div className="container">
                                            {item.item.map(singleItem =>
                                            <React.Fragment key={singleItem.id}>
                                                {(singleItem.colTestIndex === "2") ?
                                                    <div>
                                                        <div className='row'>
                                                            <div className='col-8 text-left'>
                                                                <h5>{singleItem.title}</h5>
                                                            </div>
                                                            <div className='col-4 text-right'>
                                                                <h5>{singleItem.price}</h5>                                                
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-12 text-left'>
                                                                <p>{singleItem.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                null}
                                            </React.Fragment>
                                            )}
                                        </div>
                                    </div>
                                    {(item.numCols === "3") ?
                                        <div className='col-md'>
                                            <div className="container">
                                                {item.item.map(singleItem =>
                                                <React.Fragment key={singleItem.id}>
                                                    {(singleItem.colTestIndex === "3") ?
                                                        <div>
                                                            <div className='row'>
                                                                <div className='col-8 text-left'>
                                                                    <h5>{singleItem.title}</h5>
                                                                </div>
                                                                <div className='col-4 text-right'>
                                                                    <h5>{singleItem.price}</h5>                                                
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-12 text-left'>
                                                                    <p>{singleItem.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                    null}
                                                </React.Fragment>
                                                )}
                                            </div>
                                        </div>
                                    :null}
                                </div>
                            </div>
                        </div>
                    )}
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