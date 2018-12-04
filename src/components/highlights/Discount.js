import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage(){
        if(this.state.discountStart < this.state.discountEnd){
            let newdisc = this.state.discountStart + 1
            this.setState({discountStart: newdisc});
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June </h3>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;