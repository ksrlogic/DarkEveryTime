import { produce } from "immer";

import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
         ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
         GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE
       } from "../actions"; // prettier-ignore

export const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        break;
      case ADD_COMMENT_SUCCESS:
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case GET_POSTS_REQUEST:
        draft.getPostsLoading = true;
        break;
      case GET_POSTS_SUCCESS:
        draft.getPostsLoading = false;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        break;
      case GET_POSTS_FAILURE:
        draft.getPostsLoading = false;
        draft.getPostsError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
