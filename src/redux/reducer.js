import { QUESTION, DELETECOMMENTS } from "./actions";

const initialState = {
  comments: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === QUESTION) {
    return {
      comments: [...state.comments, action.comments],
    };
  } else if (action.type === DELETECOMMENTS) {
    return {
      comments: [
        ...state.comments.filter((comments) => {
          comments.id !== action.id;
        }),
      ],
    };
  } else {
    return state;
  }
};
