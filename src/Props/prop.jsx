import React from "react"

const props = (kannu) => {
    console.log("rajan",kannu)
    return(
        <div>
            {
                kannu.kannu.map((item,index)=>(
                    <p key={index}>{item.id}</p>
                ))
            }
        </div>
    )
}

export default props;