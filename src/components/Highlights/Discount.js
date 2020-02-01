import React, { Component } from 'react'
import {Fade, Slide} from 'react-reveal'
export default class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    percentage = ()=>{
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({discountStart:this.state.discountStart+1})
        }
    }
    componentDidUpdate(){
        setTimeout(()=>{this.percentage()},30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                    onReveal={()=>this.percentage()}
                    >
                        <div className = "discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 1st December</h3>
                            <p>Quisque leo orci, suscipit vitae sollicitudin consectetur, tempus quis nulla. Phasellus ornare vulputate leo non tempor. Ut fermentum nulla vitae enim pharetra, et lobortis sapien mollis. Phasellus eleifend pharetra libero, ut dapibus orci tempus eu. Nunc vel leo augue. Quisque aliquet nisl erat, a tincidunt diam fermentum a. Cras nec dui eros. Donec orci enim, semper at arcu vel, iaculis malesuada erat.</p>
                            <div>button</div>
                        </div>
                    </Slide>
                </div>
                
            </div>
        )
    }
}
