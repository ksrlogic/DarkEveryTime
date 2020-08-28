"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _immer = require("immer");

var _actions = require("../actions");

// prettier-ignore
var initialState = {
  mainPosts: [],
  comments: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
  getCommentsLoading: false,
  getCommentsDone: false,
  getCommentsError: null
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer.produce)(state, function (draft) {
    switch (action.type) {
      case _actions.ADD_POST_REQUEST:
        draft.addPostLoading = true;
        break;

      case _actions.ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;

      case _actions.ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case _actions.ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        break;

      case _actions.ADD_COMMENT_SUCCESS:
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case _actions.ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case _actions.GET_POSTS_REQUEST:
        draft.getPostsLoading = true;
        break;

      case _actions.GET_POSTS_SUCCESS:
        draft.getPostsLoading = false;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        break;

      case _actions.GET_POSTS_FAILURE:
        draft.getPostsLoading = false;
        draft.getPostsError = action.error;
        break;

      case _actions.GET_COMMENTS_REQUEST:
        draft.getCommentsLoading = true;
        break;

      case _actions.GET_COMMENTS_SUCCESS:
        draft.getCommentsLoading = false;
        draft.comments = draft.comments.concat(action.data);
        draft.getCommentsDone = true;
        break;

      case _actions.GET_COMMENTS_FAILURE:
        draft.getCommentsLoading = false;
        draft.getCommentsError = action.error;
        break;

      default:
        break;
    }
  });
};

var _default = reducer;
exports["default"] = _default;