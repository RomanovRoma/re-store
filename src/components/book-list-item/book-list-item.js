import React, { Fragment } from 'react'
import './book-list-item.css'

const BookListItem = ({ book }) => {
  const { title, athor } = book
  return (
    <Fragment>
      <span>{title}</span>
      <span>{athor}</span>
    </Fragment>
  )
}

export default BookListItem