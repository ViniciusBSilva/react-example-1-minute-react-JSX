'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             liked: false
//         };
//     }

//     render() {
//         if (this.state.liked) {
//             return 'You liked comment number ' + this.props.commentID;
//         }

//         return e(
//             'button', {
//                 onClick: () => this.setState({
//                     liked: true
//                 })
//             },
//             'Like'
//         );
//     }
// }

// class CommentList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         const items = [];
//         this.props.items.forEach((element, i) => {

//             const li = e(
//                 'li', {
//                     key: i.toString()
//                 },
//                 [
//                     `This is the ${element} comment.`,
//                     e(LikeButton, {
//                         key: i.toString(),
//                         commentID: i + 1
//                     })

//                 ]
//             );

//             items.push(li);

//         });

//         return e(
//             'ul', {},
//             items
//         );
//     }

// }

// const domContainer = document.getElementById('comment_list')
// const root = ReactDOM.createRoot(domContainer);

// root.render(
//     e(CommentList, {
//         items: ['first', 'second', 'third']
//     }),

// );

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul> {listItems} </ul>
    );
}


const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('comment_list')
);
