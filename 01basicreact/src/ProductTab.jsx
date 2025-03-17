import Product from "./Product.jsx";

function ProductTab(){
    let options =["hi-tech","durable", "fast", "effective"]
   
    return(
        <div>
            <Product title="phone" price={30000} features={options[0]}></Product>
            <Product title="laptop" price={70000}></Product>
            <Product title="smartwatch" price= {10000} features={options[2]}></Product>
        </div>
    )
}

export default ProductTab;

//******************* Props Notes*********************/ 

// props (short for properties) are used to pass data from a parent component to a child component.
// can be basic data types like string, number, boolean, and null.
// basic props
// function WelcomeMessage(props) {
//     return <h1>{props.message}</h1>;
// }
// 2.Objects and Arrays
// objects.................... key value pair
// const user = { name: 'John', email: 'john@example.com' };
// return <UserProfile user={user} />;
// acess****
// <h2>Name: {props.user.name}</h2>
// <p>Email: {props.user.email}</p>

// Arrays..............................
// const fruits = ['Apple', 'Banana', 'Cherry'];
// return <Item items={fruits} />;
// Acess****
// return <p>The first fruit is: {props.items[0]}</p>;