//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

