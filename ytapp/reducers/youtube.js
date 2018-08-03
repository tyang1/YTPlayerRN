import createReducer from "../createReducer";
import * as types from "../actions/types";
// import { combineReducers } from "redux";

const initialState = {
  progress: 0.0,
  isReady: false,
  status: null,
  quality: null,
  error: null,
  isPlaying: true,
  isLooping: true,
  duration: 0,
  currentTime: 0,
  fullscreen: false,
  containerMounted: false,
  containerWidth: null
};

// const appReduce = (state = initialState, action) => {
//   switch (action.type) {
//     case "HANDLE_PLAY_PAUSE":
//       return { ...state, isPlaying: !state.isPlaying }
//     case "HANDLE_READY":
//       return { ...state, isReady: action.payload }
//     case "HANDLE_QUALITY":
//       return { ...state, quality: action.payload }
//     case "HANDLE_STATUS":
//       console.log("here is the status to check for play/pause", action.payload);
//       console.log("HERE IS STATE", state);
//       return { ...state, status: action.payload }
//     case "HANDLE_PROGRESS":
//       return {
//         ...state,
//         duration: action.payload.duration,
//         currentTime: action.payload.currentTime,
//         progress: action.payload.currentTime / action.payload.duration
//       }
//     default:
//       return state
//   }
// };

// const rootReducer = combineReducers({
//   app: appReduce,
// });

// export default rootReducer;
export const playStatus = createReducer(initialState, {
  [types.HANDLE_PLAY_PAUSE](state, action) {
    return { ...state, isPlaying: !state.isPlaying };
  }
});

export const readyStatus = createReducer(initialState, {
  [types.HANDLE_READY](state, action) {
    // console.log("we are at readStatus");
    return { ...state, isReady: action.payload };
  }
});

export const qualityStatus = createReducer(initialState, {
  [types.HANDLE_QUALITY](state, action) {
    return { ...state, quality: action.payload };
  }
});
export const statusStatus = createReducer(initialState, {
  [types.HANDLE_STATUS](state, action) {
    console.log("here is the status to check for play/pause", action.payload);
    console.log("HERE IS STATE", state);
    return { ...state, status: action.payload };
  }
});
export const errorStatus = createReducer(initialState, {
  [types.HANDLE_ERROR](state, action) {
    return { ...state, error: action.payload };
  }
});
export const progressStatus = createReducer(initialState, {
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
