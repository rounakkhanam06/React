import './Product.css'
import Price from './Price'

export default function Product({Title,idx}){
    let oldprices = ["1200","4500","3000","6000"]
    let newprices = ["999","3900","1200","5500"]
    let Description =[ "A high-end wireless mouse with ergonomic design and customizable buttons for enhanced productivity.",
        "A precision stylus for the iPad, perfect for drawing, sketching, and note-taking.",
        "A compact and portable Bluetooth speaker with powerful sound and long-lasting battery life.",
        "A unique pet camera that lets you monitor your pets remotely and even interact with them through a two-way audio system."
    ]
    return(
        <div className="Product">  
            <h3>{Title}</h3>
            <p>{Description[idx]}</p>
            <Price oldPrice={oldprices[idx]} newPrice= {newprices[idx]}/>
        </div>
    )
    
    
}