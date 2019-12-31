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
        Minute:time.getMinutes(),
        second:time.getSeconds()
              })
            },1000)
         
          }
      

    render() {
        return (
            <div className="Layout">
                
            </div>
        )
    }

}

export default Layout;