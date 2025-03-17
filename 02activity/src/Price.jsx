
export default function Price({oldPrice , newPrice}){
    let oldstyles = {textDecorationLine:"Line-through"};
    let newStyles = {fontWeight:"Bold"};
    let styles = {backgroundColor:"#e0c367", height:"40px", borderBottomLeftRadius :"14px",borderBottomRightRadius :"14px"};
    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}