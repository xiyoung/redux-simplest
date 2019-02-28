import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentLists extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDelete: PropTypes.func
    }
    static defaultProps = {
        comments: [],
        onDelete: null
    }

    handleDelete(index) {
        this.props.onDelete(index);
    }

    render() {
        return (
            <div className="comments-list-content">
                {this.props.comments.map((comment, index) => <Comment onDelete={this.handleDelete.bind(this)} username={comment.username} content={comment.content} created_at={comment.created_at} index={index} key={index} />)}
            </div>
        )
    }
}

export default CommentLists;
