//selectors
export const getAllPosts = ({ posts }) => posts;

export const getPostByID = ({ posts }, id) =>
  posts.find((post) => post.id === id);

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;

// action creators
export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
