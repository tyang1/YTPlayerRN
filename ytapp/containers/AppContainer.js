import React, { Component } from "react";
import ReactNative from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import YouTube from "react-native-youtube";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ProgressViewIOS,
  PixelRatio,
  Dimensions
} from "react-native";

class AppContainer extends Component {
  handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 100) * this.props.duration;
    this._youTubeRef.seekTo(progress);
  };
  secondsToTime = time => {
    return (
      Math.trunc(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60)
    );
  };
  handlePlayPause = () => {
    // if (this.state.currentTime >= 1) this.player.seek(0);
    //   this.setState(s => ({ isPlaying: !s.isPlaying }));
    this.props.handlePlayPause();
  };
  render() {

    console.log("here is the this.props.currentTime", this.props.currentTime)
    return (
      <View style={styles.container}>
        <Text>Testing 1</Text>
        <YouTube
          ref={component => {
            this._youTubeRef = component;
          }}
          videoId="3NhHqPA8nIs" // The YouTube video ID
          apiKey={"AIzaSyDHjXHUkgXYhIXCUHl9QOUwa9h8T-qxBzo"}
          play={this.props.isPlaying} // control playback of video with true/false
          fullscreen={this.props.fullscreen} // control whether the video should play in fullscreen or inline
          loop={this.props.isLooping} // control whether the video should loop when ended
          onReady={this.props.setReady}
          onChangeState={this.props.setStatus}
          onChangeQuality={this.props.setQuality}
          onError={this.props.setError}
          style={{ alignSelf: "stretch", height: 300 }}
          onProgress={this.props.setProgress}
        />
        <TouchableWithoutFeedback onPress={this.handleProgressPress}>
          <View>
            <ProgressViewIOS
              style={styles.progressBar}
              progress={this.props.progress}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonGroup}>
            <Icon
              name={this.props.isPlaying ? "pause" : "play"}
              size={20}
              color="#900"
            />
          <Text>
            {" "}
            Play Time Elapsed{" "}
            {this.secondsToTime(Math.floor(this.props.currentTime))}
          </Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("inside mapstatetoprops", state)
  return {
    isLooping: state.isLooping,
    fullscreen: state.fullscreen,
    progress: state.progress,
    duration: state.duration,
    currentTime: state.currentTime,
    isPlaying: state.isPlaying,
    status: state.status
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: 10
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "center"
  },
  progressBar: {
    paddingVertical: 8,
    width: 100,
    transform: [{ scaleX: 2.0 }, { scaleY: 2.5 }]
  },
  buttonText: {
    fontSize: 18,
    color: "blue"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
