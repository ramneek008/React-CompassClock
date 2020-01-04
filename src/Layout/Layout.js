import React, {Component} from 'react';

import './Layout.css';

class Layout extends Component {

state = {
          year:2000,
          Month:'Jan',
          month:1,
          day:1,
          week:1,
          hour:12,
          minute:1,
          second:1,
          Months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        }

componentWillMount(){
   setInterval(()=>{
        let time= new Date();

        this.setState({
        year:time.getFullYear(),
        Month:this.state.Months[time.getUTCMonth()],
        month:time.getMonth()+1,
        day:time.getDate(),
        week:time.getDay(),
        hour:time.getHours(),
        minute:time.getMinutes(),
        second:time.getSeconds()
              })
            },1000) 
        }

    array = length => Array.from({length}).map((v,k) => k).map(x=>x+1);
    addPreZero = num =>{
        if(num>=10)
        return num;
        return '0'+num;
    }
      

    render() {
        return (
            <div className="Layout">
                <div className="header">
                    <div className="msg">
                    <div className="year">
                         COMPASS CLOCK
                    </div>
                    </div>
                    <div className="Month">
                        {this.state.Month} / {this.state.year}
                    </div>
                    <div className="circle">

                    {this.array(12).map((x,index)=>{
                        return (
                            <div key={index} 
                                className={`month item ${index===(this.state.month-1)?"active":""}`} 
                                style={{transform: `rotate(${index*30-30*(this.state.month-1)}deg)`}}>
                            {`${x} month`}
                            </div>
                        )
                   })}

                   {this.array(7).map((x,index)=>{
                       return(
                           <div key={index}
                                className={`week item ${index===(this.state.week-1)?"active":""}`}
                                style={{transform: `rotate(${index*(360/21)-(360/21)*(this.state.week-1)}deg)`}}>
                                    {`${x} week`}
                            </div>
                       )
                   })
                   }

                   {this.array(30).map((x,index)=>{
                       return (
                           <div key={index} className={`day item ${index===(this.state.day-1)?"active":""}`} style={{transform: `rotate(${index*12-12*(this.state.day-1)}deg)`}}>
                               {`${x} day`}
                           </div>
                       )
                   })}

                   {this.array(24).map((x,index)=>{
                       return (
                           <div key={index} className={`hour item ${index===(this.state.hour-1)?"active":""}`} style={{transform: `rotate(${index*(360/24)-(360/24)*(this.state.hour-1)}deg)`}}>
                               {`${x} hr`}
                            </div>
                       )
                   })}

                   {this.array(60).map((x,index)=> {
                       return (
                           <div key={index} className={`minute item ${index===(this.state.minute-1)?"active":""}`} style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.minute-1)}deg)`}}>
                               {`${x} min`}
                            </div>
                       )
                   })}

                   {this.array(60).map((x,index)=>{
                       return (
                           <div key={index} className={`second item ${index===(this.state.second-1)?"active":""}`} style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.second-1)}deg)`}}>
                               {`${x} sec`}
                           </div>
                       )
                   })}






                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;