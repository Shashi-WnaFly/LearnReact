let heading = React.createElement("h1", { id: "heading", babu: "sona" }, "Hello World From React!");
let root = ReactDOM.createRoot(document.getElementById("root"));
let body = ReactDOM.createRoot(document.querySelector("body"));

// root.render(heading);

let heading1 = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Namaste React."),
        React.createElement("h2", {}, "I'm the h2 tag.")]
    ),

    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Namaste React."),
        React.createElement("h2", {}, "I'm the h2 tag.")]
    )]
);

root.render(heading1);
