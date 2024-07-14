
//first hello world code in react
const heading = React.createElement("h1",{id:"parent"},"hello my First react code");
const root= ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);//return an  object
root.render(heading); //takes the object and convert it into h1 tag

{/* <div id="parent">
<div id="child1">
    <h1>hello heading 1</h1>
    <h2>hello heading 2</h2>
</div>
<div id="child2">
    <h1>hello heading 1</h1>
    <h2>hello heading 2</h2>
</div>
</div> */}

const parent= React.createElement("div", {id:"parent"},
    [React.createElement("div",{id:"child1"}, 
        [
            React.createElement("h1",{},"hello heading 1"),
            React.createElement("h2",{},"hello heading 2")]
    ),
    React.createElement("div",{id:"child2"}, 
        [
            React.createElement("h1",{},"hello heading 1"),
            React.createElement("h2",{},"hello heading 2")]
    )
]
)

root.render(parent);//every thing above is rendered inside this div with root id and replace everything if write anything inside root in index.html