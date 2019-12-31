import React, {Component} from 'react';

import classes from './Layout.css';

class Layout extends Component {

state = {
          year:2019,
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
                         {this.state.year}
                    </div>
                    </div>
                    <div className="Month">
                        {this.state.Month}
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

                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;