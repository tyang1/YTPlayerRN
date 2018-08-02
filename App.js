// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, { Component } from "react";
import { Button } from "react-native";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ProgressViewIOS,
  TouchableOpacity,
  PixelRatio,
  Dimensions
} from "react-native";
import YouTube from "react-native-youtube";
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  state = {
    progress: 0.00,
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
  handleProgressPress = (e) => {
    const position = e.nativeEvent.locationX;
    const progress = (position/100) * this.state.duration;
    this._youTubeRef.seekTo(progress);
  }
  secondsToTime = time => {
    return (
      Math.trunc(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60)
    );
  };
  handlePlayPause = () => {
    // if (this.state.currentTime >= 1) this.player.seek(0);
    this.setState(s => ({ isPlaying: !s.isPlaying }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Still working! </Text>
        <YouTube
          ref={component => {
            this._youTubeRef = component;
          }}
          videoId="3NhHqPA8nIs" // The YouTube video ID
          apiKey={"AIzaSyDHjXHUkgXYhIXCUHl9QOUwa9h8T-qxBzo"}
          play={this.state.isPlaying} // control playback of video with true/false
          fullscreen={this.state.fullscreen} // control whether the video should play in fullscreen or inline
          loop={this.state.isLooping} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: "stretch", height: 300 }}
          onProgress={e =>
            this.setState({ duration: e.duration, currentTime: e.currentTime , progress: e.currentTime/e.duration})
          }
        />
        <TouchableWithoutFeedback onPress = {this.handleProgressPress}>
        <View>
          <ProgressViewIOS style={styles.progressBar} progress={this.state.progress} />
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.buttonGroup}>
          <TouchableWithoutFeedback onPress={this.handlePlayPause}>
            <Icon
              name={this.state.isPlaying ? "pause" : "play"}
              size={20}
              color="#900"
            />
          </TouchableWithoutFeedback>
          <Text>
            {" "}
            Play Time Elapsed{" "}
            {/* {this.state.currentTime/this.state.duration} */}
            {this.secondsToTime(Math.floor(this.state.currentTime))}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  controls: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10
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
      transform: [{ scaleX: 2.0 }, { scaleY: 2.5 }],
    },
});
