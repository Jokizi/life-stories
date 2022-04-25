import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, { payload }) => {
      payload.id = "temporaryId";
      state.posts.push(payload);
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((pic) => pic.id !== payload);
    },
    addComment: (state, { payload }) => {
      const newPosts = state.posts.map((post) => {
        if (post.id === payload[0]) {
          return {
            ...post,
            comments: payload[1],
          };
        } else {
          return post;
        }
      });
      return { posts: newPosts };
    },
  },
});

export const { getPosts, addPost, deletePost, addComment } = postSlice.actions;
export default postSlice.reducer;
