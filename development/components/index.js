var React = require('react');
import {Comment} from './comment.js';

export var CommentList = React.createClass({
    render: function() {
        let commentNodes;
        if(this.props.data != undefined){
            commentNodes = this.props.data.map(function(comment) {
                return (
                    <Comment author={comment.author} key={comment.id}>
                        {comment.text}
                    </Comment>
                )
            });
        }else{
            commentNodes = '';
        }

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

export var CommentForm = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        // TODO: send request to the server
        this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
                <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
                <input type="submit" value="Post" />
            </form>
        );
    }
});
