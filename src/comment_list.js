'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    render() {
        if (this.state.liked) {
            return 'You liked comment number ' + this.props.commentID;
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const items = [];
        this.props.items.forEach((element, i) => {

            items.push(
                <li key={element.id}>
                    This is the {element} comment.
                    <LikeButton commentID={i + 1} />
                </li>
            );

        });

        return (
            <ul>{items}</ul>
        );
    }

}

const domContainer = document.getElementById('comment_list');
const root = ReactDOM.createRoot(domContainer);

root.render(
    <CommentList items={['first', 'second', 'third']} />,
);
