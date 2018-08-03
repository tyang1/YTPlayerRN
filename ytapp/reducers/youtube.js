import createReducer from "../createReducer";
import * as types from "../actions/types";

export const playStatus = createReducer({}, {
  [types.HANDLE_PLAY_PAUSE](state, action) {
    return { ...state, isPlaying: !state.isPlaying };
  }
});
export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state, action){
    return state + 1;
  }
})

export const readyStatus = createReducer({}, {
  [types.HANDLE_READY](state, action) {
    return { ...state, isReady: action.payload };
  }
});

export const qualityStatus = createReducer({}, {
  [types.HANDLE_QUALITY](state, action) {
    return { ...state, quality: action.payload };
  }
});
export const statusStatus = createReducer({}, {
  [types.HANDLE_STATUS](state, action) {
    return { ...state, error: action.payload };
  }
});
export const progressStatus = createReducer({}, {
  [types.HANDLE_PROGRESS](state, action) {
    return {
      ...state,
      duration: action.payload.duration,
      currentTime: action.payload.currentTime,
      progress: action.payload.currentTime / action.payload.duration
    };
  }
});

// export const progressStatus = createReducer(state, {
//   [types.HANDLE_PROGRESS_PRESS](state, action) {
//     const position = action.payload.nativeEvent.locationX;
//     const progress = (position / 100) * state.duration;
//     return { ...state, ""};
//   }
// });
