import React from 'react';

function App() {
    let curDate = new Date();

    // //Externally passing a date to verify working...
    // // new Date(year,month,day,hours)...
    // let curDate=new Date(2022,12,18,1)

    curDate = curDate.getHours();
    console.log(curDate);
    let greeting = '';

    //Using Internal and Inline CSS for greeting...
    const cssStyle = {};

    if (curDate >= 6 && curDate <= 11) {
        greeting = 'Good Morning...';
        cssStyle.color = 'green';
        console.log("Good Morning...");
    }
    else if (curDate >= 12 && curDate <= 17) {
        greeting = 'Good Afternoon...';
        cssStyle.color = 'orange';
        console.log("Good Afternoon...");
    }
    else if (curDate >= 18 && curDate <= 22) {
        greeting = 'Good Evening...';
        cssStyle.color = 'purple';
        console.log("Good Evening...");
    }
    else {
        greeting = 'Good Night...';
        cssStyle.color = 'black';
        console.log("Good Night...");
    }
    return(
        <>
                <div>
                        <h1>Hello Sir !! <span style={cssStyle}>{greeting}</span></h1>
                </div>
        </>
    );
}
export default App;