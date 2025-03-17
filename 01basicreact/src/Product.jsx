

function Product({title,price,features}) {
          
    // NOTES****:- The ternary operator is especially useful for conditionally rendering UI elements based on some conditions in React components.
    // we can also declare here and can also declare and use direct in return statement under curly braces.

    let styles ={backgroundColor: price>30000 ? "pink":""}
    // if we want to add styling at some condition it is a dynamic styling
    
        return (
            <div className="Product" style={styles}>
                <h4>{title}</h4>
                { price>30000 ? <p>5% discount</p> :<a href="/">Get discount</a>}
                {/* can also use  { price>30000 && <p>5% discount</p>} */}
                <p>Price of the product is : {price}</p> 
                <p>{features}</p> 

                {/* when u declare condition before return statement can use it by this and isDiscount is a variable name 
                { <h6>{isDiscount}</h6> } */}
                
            </div>
        );
    

    }
 

export default Product;
