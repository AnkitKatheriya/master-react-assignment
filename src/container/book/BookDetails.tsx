import React from 'react'

import './BookDetails.css'

export default function BookDetails() {
    return (
        <section className='book-details-container'>
            <div className='book-image'>
                <img src="" alt="book Image" />
            </div>
            <div className='book-details'>
                <h4 className='book-title'>Book Title</h4>
                <div className='book-price'></div>
                <div className='book-author'>author name</div>
                <div className='book-page-count'>Page count</div>
                <div>ISBN</div>
                <div className='action-buttons'>
                    <button>Add to cart</button>
                    <button>Buy Now</button>
                </div>
                <p>
                    Book Description
                </p>
            </div>
        </section>
    )
}
