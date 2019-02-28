import React, { Component } from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import CommentLists from '../components/CommentLists'
import {del_comment, init_comment} from '../reducers/comments'

class CommentListContainer extends Component {
    static propTypes = {
        comments: propTypes.array,
        deleteComment: propTypes.func,
        initComment: propTypes.func
    }
    static defaultProps = {
        comments: []
    }

    componentWillMount() {
        this.props.initComment(this._loadComments)
    }

    handleDeleteComment(index) {
        this.props.deleteComment(index);
        this._saveComments([...this.props.comments.slice(0, index), ...this.props.comments.slice(index)])
    }

    _saveComments(comments) {
        window.localStorage.setItem('comments', comments)
    }

    _loadComments() {
        window.localStorage.getItem('comments')
    }

    render() {
        return (<CommentLists onDelete={this.handleDeleteComment.bind(this)} comments={this.props.comments} />)
    } 
}

const mapStateToProps = (state) => {
    return {comments: state.comments }
}
const mapActionToProps = (dispatch) => {
    return {
        deleteComment: (index) => {
            del_comment(index)
        },
        initComment: (comments) => {
            init_comment(comments);
        }  
    }
}

export default connect(mapStateToProps, mapActionToProps)(CommentListContainer)