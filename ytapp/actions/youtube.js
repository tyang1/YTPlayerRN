import * as types from './types'
export const handlePlayPause = () => {
    return {
        type: types.HANDLE_PLAY_PAUSE,

    }
    // this.setState(s => ({ isPlaying: !s.isPlaying }));
  };
export const setReady = () => {
    return {
        type: types.HANDLE_READY,
        payload: true
    }
}
export const addRecipe = () => {
    return {
        type: types.ADD_RECIPE,
    }
}
export const setStatus = (e) => {
    return {
        type: types.HANDLE_STATUS,
        payload: e.state
    }
}
export const setQuality = (e) => {
    return {
        type: types.HANDLE_QUALITY,
        payload: e.quality
    }
}
export const setError = (e) => {
    return {
        type: types.HANDLE_ERROR,
        payload: e.error
    }
}
export const setProgress = (payload) => {
    return {
        type: types.HANDLE_PROGRESS,
        payload
    }
}
