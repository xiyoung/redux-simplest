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

    componentWillMount() {
        this.props.initComment(this._loadComments())
    }

    handleDeleteComment(index) {
        this._saveComments([...this.props.comments.slice(0, index), ...this.props.comments.slice(index + 1)])
        this.props.deleteComment(index);

    }

    _saveComments(comments) {
        window.localStorage.setItem('comments', JSON.stringify(comments))
    }

    _loadComments() {
        return JSON.parse(window.localStorage.getItem('comments'))
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
            dispatch(del_comment(index))
        },
        initComment: (comments) => {
            dispatch(init_comment(comments));
        }  
    }
}

export default connect(mapStateToProps, mapActionToProps)(CommentListContainer)