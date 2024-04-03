import React from 'react'

let curDate = new Date(2023,9,6,21);
curDate = curDate.getHours();

let greeting="";
const cssStyle={};

if(curDate>=1 &&  curDate<12){
  greeting="Good Morning";
  cssStyle.color="green";
}
else if(curDate>=12 && curDate<19){
  greeting="Good Afternoon";
  cssStyle.color="orange";

}
else{
  greeting = "Good Night";
  cssStyle.color="black";

}

const App = () => {
  return (
    <>
            <h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </>
  )
}

export default App
