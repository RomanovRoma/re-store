import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { connect } from 'react-redux'

import { withBookstoreService } from '../hoc'
import { fetchBookS } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBookS()
  }

  render() {
    const { books, loading, error } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator/>
    }
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBookS: fetchBookS(bookstoreService, dispatch)
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)