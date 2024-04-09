import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("h1", {id: "parent"}, "Namaste React");

let root = ReactDOM.createRoot(document.getElementById('root'));

const NamComponent = () => <h1>Namaste React</h1>;

const HeadingComponent = () => (
    <div id="container">
        {heading}
        <NamComponent />
        <h1 className="hello">Hello My Name Is Sunny</h1>
    </div>
);
root.render(<HeadingComponent />);
