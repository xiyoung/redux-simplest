import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentInput from '../components/CommentInput'
import {add_comment} from '../reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        addComment: PropsTypes.func,
        comments: PropsTypes.array
    }

    static defaultProps = {
        comments: []
    }
    
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    componentWillMount() {
        this.setState({
            username: this._loadUserName()
        })
    }

    _loadUserName() {
      return window.localStorage.getItem('username')
    }

    handleAddComment(comment) {
        this.props.addComment(comment);
        this._saveComments([...this.props.comments, comment])
    }
   

    saveUsernameToLocal(username) {
        this._saveUserName(username)
    }
    
    _saveUserName(username) {
        window.localStorage.setItem('username', username)
    }

    _saveComments(comments) {
        window.localStorage.setItem('comments', comments)
    }

    render() {
        return (
          <CommentInput onUserNameInputBlur={this.saveUsernameToLocal.bind(this)} onSubmit={this.handleAddComment.bind(this)} username={this.state.username} />  
        )
    }
}

const mapStateToProps = (store) => {
    return {
        comments: store.comments
    }
}

const mapActionToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(add_comment(comment));
        },
        
    }
}

export default connect(mapStateToProps, mapActionToProps)(CommentInputContainer)