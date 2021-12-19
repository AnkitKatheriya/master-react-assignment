import React from 'react'
import { Link } from 'react-router-dom'

import './BookCard.css'

interface IOwnProps {
    id: number,
    image: string,
    title: string,
    description: string,
}

const BookCard: React.FC<IOwnProps> = ({ id, image, title, description }) => {
    return (
        <article key={id} className='card-book-container'>
            <div className='card-book-image'>
                <img src={image} alt="book image" />
            </div>
            <div className='card-details'>
                <h4 className='card-book-title'>{title}</h4>
                <p className='card-book-desc'>{description}</p>
                <button className='card-button'><Link to={`/boooklist/${id}`}>Buy Button</Link></button>
            </div>
        </article>
    )
}

export default BookCard