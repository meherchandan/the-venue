import React, { Component } from 'react'
import GeneralButton from './../utils/GeneralButton';
import Zoom from 'react-reveal/Zoom'
export default class Pricing extends Component {
    state={
        prices:[100,120,200],
        position: ['Economy','Business','First'],
        description:['ed luctus semper eros, eu mattis ex molestie vel. Donec gravida turpis sed urna dignissim, quis convallis leo vehicula. Proin et nisl tincidunt, lobortis metus nec, fermentum velit.',
            'Proin sit amet orci feugiat, fermentum magna vel, sollicitudin orci. Integer metus orci, ornare condimentum interdum in, tempor sed justo. Donec laoreet orci sapien.','Etiam varius eros ut orci eleifend, ac fringilla nisl molestie. Sed commodo elementum libero, vitae vehicula risus bibendum ac. Aenean arcu sapien, ornare at sem ac, aliquet facilisis leo'],
        link:['https:/sales/e','https:/sales/b','https:/sales/a'],
        delay:[500,0,500]
    }
    showBoxes= ()=>(
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                            </div>
                        <div className="pricing_description">{this.state.description[i]}</div>
                        <div className="pricing_buttons">
                            <GeneralButton
                            label="Purchase ticket"
                            background = "#ffa800"
                            color="#ffffff"
                            link={this.state.link[i]} />
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
        )
    }
}
