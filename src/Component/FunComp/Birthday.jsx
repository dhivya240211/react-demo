import React, { useEffect, useState } from "react";
import "./birthday.css";
export const Birthday = () => {

    
    const [tool, settool] = useState(


        [

            {

                id: 1,

                name: 'Bertie Yates',

                age: 29,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',

            },

            {

                id: 2,

                name: 'Hester Hogan',

                age: 32,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',

            },

            {

                id: 3,

                name: 'Larry Little',

                age: 36,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',

            },

            {

                id: 4,

                name: 'Sean Walsh',

                age: 34,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',

            },

            {

                id: 5,

                name: 'Lola Gardner',

                age: 29,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',

            },

        ]
    )




const handleclear=()=>{
    settool([])
}

return (

    <div class="bg">
        
        
        <h1 class="identy" >{tool.length}Birthdays Today</h1>
        
        
        {tool.map((da,i) => (
            
            <div key={i} >
                <img src={da.image}  class="photic" />
                <h2 class="unique">{da.name}</h2>
                <p class="modify">{da.age}years ago</p>
                




            </div>
        ))}
      
<button onClick={handleclear} class="all">ClearAll</button>
        



    </div>
)
        }


export default Birthday