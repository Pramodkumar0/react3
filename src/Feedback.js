import React, { Component } from 'react'

class Feedback extends Component {
  constructor(props){
    super(props)
    console.log(props.data)

  }
  change(){
    console.log(this.props.stateobj);
    
    this.props.statechange();
    
    }
  
  render() {
    return (

      <div className='complete'>
        
     
      <h1 >Employee Feedback Data</h1>
      
      <div className='Employees_data'>
        {this.props.data.length > 0 && this.props.data.map((e) =>  {
        return (<div className='data'>

      <span className="UserData">Name :{e.name}</span>
      <span> | </span>
      <span className="UserData">Department:{e.department}</span>
      <span> | </span>
      <span className="UserData">Rating : {e.rating}</span> 
      
          {/* <h1>{e.name} | {e.department} | {e.rating}</h1> */}
          
        </div>)
        

      })}

  </div>
  <button onClick={this.change.bind(this)}>GO BACK</button>
  </div>
    )
  }
}

export default Feedback