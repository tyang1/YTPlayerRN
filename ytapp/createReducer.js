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

export default (createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
});
