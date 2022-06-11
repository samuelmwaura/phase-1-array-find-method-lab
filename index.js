// code your solution here
const record = [
    {year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

const superbowlWin = (array)=>{
const found = array.find(element=>{// The found variable gets the array whose value has  been gotten as true. 
    return element.result === 'W';  // Here a boolen is returned - the callback in find() always returns a boolean.
});
if(found){
    return found.year
}else{
    return undefined;
}  
}