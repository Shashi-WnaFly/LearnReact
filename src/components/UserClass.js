import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    // this.timer = setInterval( ()=>{
    //   console.log("class setInterval")
    // },1000)
    this.state = {
      userInfo : {
        name : "Dammy name",
        location : "default"
      }
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shashi-WnaFly");
    const json = await data.json();
    this.setState ({
      userInfo : json
    })
    console.log(json)
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    // clearInterval(this.timer); one of the use of componentWillUnmount
  }
  
  render() {
    const {name, location, avatar_url, id} = this.state.userInfo;
    return (
      <div style={{ border: "2px solid salmon", padding: "1rem" }}>
        <img src={avatar_url} />
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <h2>Id : {id}</h2>
      </div>
    );
  }
}

export default UserClass;
