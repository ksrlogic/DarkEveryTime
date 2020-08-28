"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = postSaga;

var _effects = require("redux-saga/effects");

var _shortid = _interopRequireDefault(require("shortid"));

var _faker = _interopRequireDefault(require("faker"));

var _axios = _interopRequireDefault(require("axios"));

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addComment),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(addPost),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(getPosts),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(getComments),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(watchAddPost),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(watchCommentPost),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(watchGetPosts),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(watchGetComments),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(postSaga);

// prettier-ignore
function addPostAPI(data) {
  return _axios["default"].post("http://localhost:3075/api/post", data);
}

function addCommentAPI(data) {
  return _axios["default"].post("http://localhost:3075/api/post_comment", data);
}

function getPostsAPI(data) {
  return _axios["default"].get("http://localhost:3075/api/getpost/".concat(data));
}

function getCommentsAPI(data) {
  return _axios["default"].get("http://localhost:3075/api/get_comments/".concat(data));
}

function addComment(_ref) {
  var data, postId;
  return regeneratorRuntime.wrap(function addComment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data, postId = _ref.postId;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(addCommentAPI, {
            data: data,
            postId: postId
          });

        case 4:
          _context.next = 6;
          return (0, _effects.put)({
            type: _actions.ADD_COMMENT_SUCCESS
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          _context.next = 12;
          return (0, _effects.put)({
            type: _actions.ADD_COMMENT_FAILURE,
            error: _context.t0.response.data //	err.response.data 고정

          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
}

function addPost(_ref2) {
  var content, title, result, id;
  return regeneratorRuntime.wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          content = _ref2.content, title = _ref2.title;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(addPostAPI, {
            content: content,
            title: title
          });

        case 4:
          result = _context2.sent;

          if (!(result.status !== 200)) {
            _context2.next = 7;
            break;
          }

          throw new Error("cannot get data");

        case 7:
          id = _shortid["default"].generate();
          _context2.next = 10;
          return (0, _effects.put)({
            type: _actions.ADD_POST_SUCCESS,
            data: {
              id: id,
              content: content,
              title: title,
              time: _faker["default"].date.past(),
              author: "익명",
              vote: _faker["default"].random.number(5),
              comment: _faker["default"].random.number(10)
            } //	result.data 고정

          });

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 16;
          return (0, _effects.put)({
            type: _actions.ADD_POST_FAILURE,
            data: _context2.t0.response.data //	err.response.data 고정

          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 12]]);
}

function getPosts(_ref3) {
  var where, result, RealData;
  return regeneratorRuntime.wrap(function getPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          where = _ref3.where;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(getPostsAPI, where);

        case 4:
          result = _context3.sent;
          RealData = result.data.map(function (data) {
            return {
              id: data.id,
              title: data.title,
              content: data.content,
              time: data.createdAt,
              author: "익명",
              vote: _faker["default"].random.number(5),
              comment: _faker["default"].random.number(10)
            };
          });
          _context3.next = 8;
          return (0, _effects.put)({
            type: _actions.GET_POSTS_SUCCESS,
            data: RealData //	result.data 고정

          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 14;
          return (0, _effects.put)({
            type: _actions.GET_POSTS_FAILURE,
            data: _context3.t0.response.data //	err.response.data 고정

          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 10]]);
}

function getComments(_ref4) {
  var where, result;
  return regeneratorRuntime.wrap(function getComments$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          where = _ref4.where;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(getCommentsAPI, where);

        case 4:
          result = _context4.sent;
          _context4.next = 7;
          return (0, _effects.put)({
            type: _actions.GET_COMMENTS_SUCCESS,
            data: result //	result.data 고정

          });

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 13;
          return (0, _effects.put)({
            type: _actions.GET_COMMENTS_FAILURE,
            data: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 9]]);
}

function watchAddPost() {
  return regeneratorRuntime.wrap(function watchAddPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeLatest)(_actions.ADD_POST_REQUEST, addPost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchCommentPost() {
  return regeneratorRuntime.wrap(function watchCommentPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)(_actions.ADD_COMMENT_REQUEST, addComment);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchGetPosts() {
  return regeneratorRuntime.wrap(function watchGetPosts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeLatest)(_actions.GET_POSTS_REQUEST, getPosts);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchGetComments() {
  return regeneratorRuntime.wrap(function watchGetComments$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeLatest)(_actions.GET_COMMENTS_REQUEST, getComments);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return regeneratorRuntime.wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(watchAddPost), (0, _effects.fork)(watchGetPosts), (0, _effects.fork)(watchCommentPost), (0, _effects.fork)(watchGetComments)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}