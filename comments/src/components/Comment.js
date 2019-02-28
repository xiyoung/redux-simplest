import React, {
    Component,
} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object,
        onDelete: PropTypes.func,
        index: PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            timeApart: ''
        }
    }

    componentWillMount() {
        this._updateAt();
        this._timer = setInterval(() => {
            this._updateAt();
        }, 5000);
    }

    _updateAt() {
        const timeApartStamp = Date.now() - this.props.comment.created_at;
        this.setState({
            timeApart: Math.round(timeApartStamp/1000) >= 60 ? `${Math.round(timeApartStamp / 1000 / 60)}分钟前` : `${Math.max(Math.round(timeApartStamp / 1000), 1)}秒前`
        })
    }

    handleDeleteClick() {
        this.props.onDelete(this.props.index);
    }

    getProcessedContent(content) {
        //console.log(content.replace(/`([\S\s]+?)`/g, '<code>$1</code>'));
        return content.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render() {
        return (
            <div className="comment-content">
                <div className="user"><span>{this.props.comment.username}</span></div>：
                <div className="content" dangerouslySetInnerHTML={{ __html: this.getProcessedContent(this.props.comment.content)}}></div>
                <div className="time-content"><span>{this.state.timeApart}</span></div>
                <div className="delete-content"><span onClick={this.handleDeleteClick.bind(this)}>删除</span></div>
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this._timer)
    }
}

export default Comment