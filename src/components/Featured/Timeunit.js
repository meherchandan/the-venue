import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
export default class Timeunit extends Component {
    state={
        deadline: 'Dec, 31, 2020',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log( Date.parse(deadline))
        let seconds=0,minutes=0,hours=0,days=0;
        if(time>0){
            seconds = Math.floor((time/1000)%60) ;
            minutes = Math.floor((time/1000/60)%60) ;
            hours = Math.floor((time/1000*60*60)%24) ;
            days = Math.floor(time/(1000*60*60*24)) ; 
        }
        this.setState({days,minutes,hours,seconds})

    }
    componentWillUnmount(){
        this.setIntervalForDeadline = null;
    }
    setIntervalForDeadline = (deadline)=>{
        setInterval(()=>{this.getTimeUntil(deadline)},1000);
    }
    componentDidMount(){
        this.setIntervalForDeadline(this.state.deadline);
    }
    render() {
        return (
            <div className="countdown_wrapper">
                <Fade left delay={1000}>
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                HS
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}
