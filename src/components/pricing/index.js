import React, { Component } from 'react';
import MyButton from '../utils/Button';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    constructor(props){
        super(props);
        this.state = {
            prices: [100, 2000, 5000],
            positions: ["Medium", "Balcony", "Star"],
            desc: [
                'Loream ipsum donal mit any thing to hit',
                'Loream ipsum donal mit and she is lit',
                'Loream ipsum donal mit after we sit bro'
            ],
            linkto: ['http://sales/b', 'http://sales/c', 'http://sales/c'],
            delay: [500, 0, 500]
        }
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i} >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton link={this.state.linkto[i]}
                                        text="Click"
                                        bck="#ffa800"
                                        color="#fff"
                                        />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;