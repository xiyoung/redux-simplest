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
        const {username, content} = comment;
        if (!username) {
            alert('请输入用户名');
            return;
        }
        if (!content) {
            alert('请输入评论内容');
            return;
        }
        this._saveComments([...this.props.comments, comment])
        this.props.addComment(comment);
    }
   

    saveUsernameToLocal(username) {
        this._saveUserName(username)
    }
    
    _saveUserName(username) {
        window.localStorage.setItem('username', username)
    }

    _saveComments(comments) {
        window.localStorage.setItem('comments', JSON.stringify(comments))
    }    

    render() {
        return (
          <CommentInput onUserNameInputBlur={this.saveUsernameToLocal.bind(this)} onSubmit={this.handleAddComment.bind(this)} username={this.state.username} />  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
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