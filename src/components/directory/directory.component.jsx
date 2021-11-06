import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'womens',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '1'
                }, {
                    title: 'mens',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '2'
                }, {
                    title: 'horses',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '3'
                }, {
                    title: 'cats',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '4',
                    size : 'large'
                }, {
                    title: 'dogs',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '5',
                    size : 'large'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imgUrl, id, size}) => (
                        <MenuItem key={id} title={title} imgUrl={imgUrl} size={size}/>
                    ))
                }
            </div>
        )

    }
}

export default Directory