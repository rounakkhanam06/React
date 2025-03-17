import Product from './Product';
import './ProductTab.css'


export default function ProductTab(){
    return(
        <div className="product-tab" >
            
            <Product Title="Logitech mx Master" idx={0}/>
            <Product Title="Apple pencil"idx ={1} />
            <Product Title="Zebronics Zeb-transformer" idx ={2}/>
            <Product  Title="Petronics Toad 23" idx ={3}/>
        </div>
    )
}