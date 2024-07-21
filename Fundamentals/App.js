import React from 'react';
import ReactDOM from 'react-dom/client'


// simple react element
const element= (
<h1>I am a Simple react element</h1>
);

// functional component
const Title=()=>{
    return (
       <div>
         <h1>This is Heading</h1>
         {/* you can also call react elememt inside jsx */}
         {element}
         {/* you can write js inside jsx code inside {} */}
         <h1>{1000}</h1>  
       </div>
    )
};

// functional component 
// this is component composition => one component inside another component 
const Component1 = () =>(
   <div>
     <Title />
     <h1>I am the First jsx react element  with  one  react element</h1>
   </div>
);



const root= ReactDOM.createRoot(document.getElementById("root"));

//rendering an element
root.render(element);

 //rendering an component and component always start with capital letter 
root.render(<Component1 />);