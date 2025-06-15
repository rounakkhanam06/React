import {useState} from "react";

export default  function LikeButton(){
    let [isLiked,setisLiked] = useState(false);

    let toggleLike=()=>{
        setisLiked(!isLiked);
      
    }
    // let Clicked=()=>{console.log("Clicked")}
    let styles = {color:"red"};
    return(
        <div>
            <p onClick={toggleLike}>{
                isLiked?<i className="fa-regular fa-heart"  ></i> :<i className ="fa-solid fa-heart" style={styles}></i>
                }
             </p>  
        </div>
    )
}
     
