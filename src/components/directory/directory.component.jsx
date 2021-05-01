import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections:[
                {
                    title:'Hats',
                    imageUrl:"https://images.unsplash.com/photo-1590092940833-0af304b36ee7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
                    id:1,

                },
                {
                    title:'JACKETS',
                    imageUrl:"https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80",
                    id:2
                },
                {
                    title:'SNEAKERS',
                    imageUrl:"https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
                    id:3
                },
                {
                    title:'WOMENS',
                    imageUrl:"https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
                    id:4,
                    size:'large'
                },
                {
                    title:'MENS',
                    imageUrl:"https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    id:5,
                    size:'large'
                },
            ]
        }
    }


    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size}) =>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }

}


export default Directory;
