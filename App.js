import React from "react";
import ReactDOM from "react-dom/client";

// *********    nested header using react.createElement    ***********

// const header = React.createElement("div", {className: "title"}, [
//     [React.createElement("h1", {}, "this is H1 tag.")],
//     [React.createElement("h2", {}, "this is H2 tag")],
//     [React.createElement("h3", {}, "this is H3 tag")]
// ])

// *********    nested header using JSX    ***********

// const header = <div className="title">
//     <h1>this is h1 tag</h1>
//     <h2>this is h2 tag</h2>
//     <h3>this is h3 tag </h3>
// </div>

// *********    nested header using functional component   ***********

// const Footer = ()=>(
//     <div id="footer">
//         <p className="foo-ele">LinkedIn</p>
//         <p className="foo-ele">Github</p>
//         <p className="foo-ele">Twitter</p>
//         <p className="foo-ele">Golang</p>
//     </div>
// )
// const Header = ()=> (
//     <div className="title">
//         <h1>This is H1 tag</h1>
//         <h2>This is H2 tag</h2>
//         <h3>This is H3 tag</h3>
//         {Footer()}
//     </div>
// );

const AppLayout = ()=>(
    <div className="AppLayout">
        <Header />
        <Body />
    </div>
)

const Body = ()=>(
    <div className="body">
        <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
)
const Header = ()=>(
    <div className="header">
        <img src={require('./images/slack.png')} alt="logo" id="logo"/>
        <input type="text" placeholder="Search Here" id="search-bar"></input>
        <div>
            <ul className="links">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contacts</li>
            </ul>
        </div>
        <img src={require('./images/user.png')} id="user"></img>
    </div>
)

const RestaurantCard = ()=>(
    <div className="res_card">
        <img src="https://b.zmtcdn.com/data/pictures/1/4000081/7ac630e8c2e925ee164e2e87b0fcb560.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="food logo" className="foodLogo"/>
        <div className="details">
            <h3>Meghna foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);



