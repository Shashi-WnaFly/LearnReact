import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      count1 : 1
    }
  }
  
  render() {
    const {name, location} = this.props;
    const { count, count1 } = this.state;
    return (
      <div style={{ border: "2px solid salmon", padding: "1rem" }}>
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <h2>count : {count}</h2>
        <button onClick={()=>{
          this.setState({
            count: this.state.count+1,
          })
        }}>Count Increase</button>
        <h2>count1 : {count1}</h2>
      </div>
    );
  }
}

export default UserClass;
