// function Greeter({name="default Name", age=25, showNav}){
    function Greeter(props){
    // debugger
   // props.name= "Name modified";
    return (
        <>  
         <p>This is from first component  {props.name}</p>
        <p>This is from second component  {props.age+10}</p> 
        <p>This is from third component {props.showNav}</p>
        {/* <p>This is from first component  {name}</p>
        <p>This is from second component  {age+10}</p> 
        <p>This is from third component {showNav}</p> */}
        </ >
    );
}

export default Greeter;