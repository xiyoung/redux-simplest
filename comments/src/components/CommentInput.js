import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.string,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func //缓存usernma
    }
    static defaultProps = {
        username: '',
    }
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            username: props.username
        }
        this.commonInput = {}
    }
    componentDidMount() {
        this.commonInput.focus();
    }
    
    inputChangeHandle(e) {
        this.setState({
            username: e.target.value
        })
    }

    textChangeHandle(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            const { username, content} = this.state;
            this.props.onSubmit({username, content, created_at: Date.now()})
            this.setState({
                content: ''
            })
        }
    }

    handleSaveToLocal(e) {
        if(this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(e.target.value)
        }
    }

    render() {
        return (
            <div className="input-content">
                <div className="user-content"><span>用户名：</span><input onBlur={this.handleSaveToLocal.bind(this)} onChange={this.inputChangeHandle.bind(this)} value={this.state.username} /></div>
                <div className="text-content"><span>评论内容：</span><textarea ref={input => this.commonInput = input} onChange={this.textChangeHandle.bind(this)} value={this.state.content}></textarea></div>
                <div className="button-content"><button onClick={this.handleSubmit.bind(this)}>发布</button></div>
            </div>
        )
    }
}

export default CommentInput;