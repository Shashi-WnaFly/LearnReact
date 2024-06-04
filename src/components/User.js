const User = (props) => {
    const {name, location} = props;
    return (
        <div style={{border:"2px solid black", padding:"1rem"}}>
            <p>Name : {name}</p>
            <p>Location : {location}</p>
            <p>Job : null</p>
        </div>
    )
}

export default User;