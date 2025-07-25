import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(
  persist(
    (set, get) => ({
      comments: [],
      // likes: new Set(),
      addComment: (name, text) => {
        const newComment = { name, text, timestamp: Date.now() };
        set({ comments: [newComment, ...get().comments] });
      },

      // likePost: (name) => {
      //   const likes = new Set(get().likes);
      //   likes.add(name);
      //   set({ likes });
      // },

      // hasLiked: (name) => {
      //   const likes = new Set(get().likes);
      //   return likes.has(name);
      // },

      // getLikesCount: () => {
      //   const likes = new Set(get().likes);
      //   return likes.size;
      // },

      clearStorage: () => {
        localStorage.removeItem("post-store");
        set({ comments: [], likes: new Set() });
      },
    }),
    {
      name: "post-store",
      onRehydrateStorage: () => (state) => {
        if (state?.likes && Array.isArray(state.likes)) {
          state.likes = new Set(state.likes);
        }
      },
      partialize: (state) => ({
        comments: state.comments,
        likes: Array.from(state.likes),
      }),
    }
  )
);

export default usePostStore;
