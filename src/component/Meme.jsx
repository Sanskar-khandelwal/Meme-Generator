import React from 'react';
import data from '../component/data'



export  default function  Meme (){
    const displayConsole = function (){
        const random = Math.floor(Math.random() * 100 + 1);
 const {url} = data.data.memes[random];
    }
    return (
<div className="meme">
<input type="text" placeholder="above text" />
<input type="text" placeholder="Below  text" />
<input 
type="submit" 
value = "Generate new meme 🤷‍♂️"
onClick = {displayConsole} />
</div>
   



    )
}