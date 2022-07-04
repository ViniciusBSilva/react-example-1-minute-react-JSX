'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.state = {
            liked: false
        };
        return _this;
    }

    _createClass(LikeButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.liked) {
                return 'You liked comment number ' + this.props.commentID;
            }

            return React.createElement(
                'button',
                { onClick: function onClick() {
                        return _this2.setState({ liked: true });
                    } },
                'Like'
            );
        }
    }]);

    return LikeButton;
}(React.Component);

var CommentList = function (_React$Component2) {
    _inherits(CommentList, _React$Component2);

    function CommentList(props) {
        _classCallCheck(this, CommentList);

        var _this3 = _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call(this, props));

        _this3.state = {};
        return _this3;
    }

    _createClass(CommentList, [{
        key: 'render',
        value: function render() {
            var items = [];
            this.props.items.forEach(function (element, i) {

                items.push(React.createElement(
                    'li',
                    { key: element.id },
                    'This is the ',
                    element,
                    ' comment.',
                    React.createElement(LikeButton, { commentID: i + 1 })
                ));
            });

            return React.createElement(
                'ul',
                null,
                items
            );
        }
    }]);

    return CommentList;
}(React.Component);

var domContainer = document.getElementById('comment_list');
var root = ReactDOM.createRoot(domContainer);

root.render(React.createElement(CommentList, { items: ['first', 'second', 'third'] }));