import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {id:"heding"}, "Hi this is React");

// console.log(heading);

//         const root = ReactDOM.createRoot(
//             document.getElementById("root")
//         );

//         root.render(heading);
//===========
        // <div>
        //     <div>
        //         <h1>

        //         </h1>
        //     </div>
        // </div>
//ReactElement(object)=>HTML(Browser understand)
        const parent=React.createElement("div",{id:"parent"},
            React.createElement("div",{id:"child"}
                ,React.createElement("h1",{},"this me samrudhi 💕")));
                console.log(parent);
                

                const rot=ReactDOM.createRoot(document.getElementById("root"));
                rot.render(parent);
