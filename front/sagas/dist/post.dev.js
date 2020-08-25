"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = postSaga;

var _effects = require("redux-saga/effects");

var _shortid = _interopRequireDefault(require("shortid"));

var _faker = _interopRequireDefault(require("faker"));

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
regeneratorRuntime.mark(watchAddPost),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(watchCommentPost),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(watchGetPosts),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(postSaga);

// prettier-ignore
// function addPostAPI() {
//   return axios.post("/api/post");
// }
// function removePostAPI() {
//   return axios.post("/api/post");
// }
function addComment(_ref) {
  var data;
  return regeneratorRuntime.wrap(function addComment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.delay)(1000);

        case 4:
          _context.next = 6;
          return (0, _effects.put)({
            type: _actions.ADD_COMMENT_SUCCESS,
            data: data //	result.data 고정

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
            data: _context.t0.response.data //	err.response.data 고정

          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
}

function addPost(_ref2) {
  var content, title, id;
  return regeneratorRuntime.wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          content = _ref2.content, title = _ref2.title;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.delay)(1000);

        case 4:
          id = _shortid["default"].generate();
          _context2.next = 7;
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

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return (0, _effects.put)({
            type: _actions.ADD_POST_FAILURE,
            data: _context2.t0.response.data //	err.response.data 고정

          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function getPosts() {
  var DummyData;
  return regeneratorRuntime.wrap(function getPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          DummyData = Array(10).fill().map(function () {
            return {
              id: _shortid["default"].generate(),
              title: _faker["default"].lorem.sentence(),
              content: _faker["default"].lorem.paragraph(),
              time: _faker["default"].date.past(),
              author: "익명",
              vote: _faker["default"].random.number(5),
              comment: _faker["default"].random.number(10)
            };
          });
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.delay)(1000);

        case 4:
          _context3.next = 6;
          return (0, _effects.put)({
            type: _actions.GET_POSTS_SUCCESS,
            data: DummyData //	result.data 고정

          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 12;
          return (0, _effects.put)({
            type: _actions.GET_POSTS_FAILURE,
            data: _context3.t0.response.data //	err.response.data 고정

          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 8]]);
}

function watchAddPost() {
  return regeneratorRuntime.wrap(function watchAddPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(_actions.ADD_POST_REQUEST, addPost);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchCommentPost() {
  return regeneratorRuntime.wrap(function watchCommentPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeLatest)(_actions.ADD_COMMENT_REQUEST, addComment);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchGetPosts() {
  return regeneratorRuntime.wrap(function watchGetPosts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)(_actions.GET_POSTS_REQUEST, getPosts);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function postSaga() {
  return regeneratorRuntime.wrap(function postSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(watchAddPost), (0, _effects.fork)(watchGetPosts), (0, _effects.fork)(watchCommentPost)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}