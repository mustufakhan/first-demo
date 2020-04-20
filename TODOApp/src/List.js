import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import './list.css';
 const List = props =>(

 <ol>{
        
    props.items.map((value)=> 
    <li className="list">  <div > <FlipMove duration={500} easing="ease-in-out"><input type="text" value={value.text} id={value.key} onChange={(e)=>{
        props.setupdate(e.target.value,value.key)}}/></FlipMove>
    <span className="span">
        <FontAwesomeIcon className="faicons"  onClick={()=>{props.delete(value.key)}} icon="trash" />
        </span></div> </li>
    )
     
     }
     </ol>
 )
 export default List;