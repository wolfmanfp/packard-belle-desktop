import React, { Component } from "react";
import { SettingsContext } from ".";

const toggle = (dis, key) => () => {
  dis.setState(state => ({ [key]: !state[key] }));
};

const setKeyValue = (dis, key) => val => {
  dis.setState(state => ({ [key]: val }));
};

class SettingsProvider extends Component {
  state = {
    scale: 1,
    fullScreen: false,
    isMobile: false,
    bgImg:
      (window && window.localStorage.getItem("bgImg")) ||
      (window && !window.localStorage.getItem("loggedIn")),
    bgColor: (window && window.localStorage.getItem("bgColor")) || "#fff",
    bgStyle: (window && window.localStorage.getItem("bgStyle")) || "stretch"
  };

  toggleFullScreen = toggle(this, "fullScreen");
  toggleMobile = toggle(this, "isMobile");
  changeScale = setKeyValue(this, "scale");

  updateLocalStorage = (key, val) => {
    if (window && window.localStorage) {
      window.localStorage.setItem(key, val);
      if (val) {
        this.setState({ [key]: val });
      }
    }
  };
  removeLocalStorage = key => {
    let keys = key;
    if (!Array.isArray(key)) {
      keys = [key];
    }
    if (keys.length < 1) {
      return;
    }
    if (window && window.localStorage) {
      keys.map(k => window.localStorage.removeItem(k));

      this.setState(
        keys.reduce(
          (acc, val) => ({
            ...acc,
            [val]: null
          }),
          {}
        )
      );
    }
  };

  render() {
    const {
      changeScale,
      toggleFullScreen,
      toggleMobile,
      updateLocalStorage,
      removeLocalStorage
    } = this;
    const context = {
      ...this.state,
      changeScale,
      toggleFullScreen,
      toggleMobile,
      updateLocalStorage,
      removeLocalStorage
    };
    return (
      <SettingsContext.Provider value={context}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
