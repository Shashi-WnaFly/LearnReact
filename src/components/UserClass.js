import React from "react";

class UserClass extends React.Component {

  Constructor(props) {
    // super(props); // here super key generating an error and whole project not render but in the
    // video it works fine.
  }

  render() {
    // const { name, location } = this.props;
    const {name, location} = this.props;
    return (
      <div style={{ border: "2px solid salmon", padding: "1rem" }}>
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <p>Job : null</p>
      </div>
    );
  }
}

export default UserClass;
