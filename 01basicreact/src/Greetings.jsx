

function Greetings(props) {

    return (
        <>
            <h1>Hello {props.name}</h1>
            <p>Your age is: {props.age}</p>
            <p>Your marks are: {props.marks}</p>
            <button onClick = {props.click}>Click me</button>
        </>
    );
}

export default Greetings;
