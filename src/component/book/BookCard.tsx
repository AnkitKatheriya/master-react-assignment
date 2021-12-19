import React from 'react'
import { Link } from 'react-router-dom'

import './BookCard.css'

export default function BookCard() {
    return (
        <article className='card-book-container'>
            <div className='card-book-image'>
                <img src="" alt="book image" />
            </div>
            <div className='card-details'>
                <h4 className='card-book-title'>Book Title</h4>
                <p className='card-book-desc'>Bood description</p>
                <button className='card-button'><Link to="/overview">Buy Button</Link></button>
            </div>
        </article>
    )
}
