// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReactUse from "react-use";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Util$ReactHooksTemplate from "../Util.bs.js";
import * as Library$ReactHooksTemplate from "../Library/Library.bs.js";

require("./Player.css");

function nextStrOfStatus(s) {
  if (s) {
    return "Pause";
  } else {
    return "Play";
  }
}

function Player(Props) {
  var tracks = Props.tracks;
  var match = React.useReducer((function (state, $$event) {
          var match = state[/* status */0];
          if ($$event) {
            return /* record */[
                    /* status : Playing */1,
                    /* activeTrackIndex */$$event[0]
                  ];
          } else if (match) {
            return /* record */[
                    /* status : Paused */0,
                    /* activeTrackIndex */state[/* activeTrackIndex */1]
                  ];
          } else {
            var match$1 = state[/* activeTrackIndex */1];
            return /* record */[
                    /* status : Playing */1,
                    /* activeTrackIndex */match$1 !== undefined ? match$1 : 0
                  ];
          }
        }), /* record */[
        /* status : Paused */0,
        /* activeTrackIndex */undefined
      ]);
  var send = match[1];
  var state = match[0];
  var match$1 = state[/* activeTrackIndex */1];
  var match$2 = ReactUse.useAudio({
        src: match$1 !== undefined ? Caml_array.caml_array_get(tracks, match$1)[/* src */2] : "",
        autoPlay: false
      });
  var controls = match$2[2];
  var playerState = match$2[1];
  React.useEffect((function () {
          var match = state[/* status */0];
          if (match) {
            controls.play();
          } else {
            controls.pause();
          }
          return undefined;
        }), /* tuple */[
        state[/* status */0],
        controls
      ]);
  var match$3 = playerState.muted;
  return React.createElement(React.Fragment, undefined, React.createElement(Library$ReactHooksTemplate.make, {
                  tracks: tracks,
                  playTrack: (function (i) {
                      return Curry._1(send, /* PlayTrack */[i]);
                    })
                }), React.createElement("section", {
                  "aria-label": "player"
                }, match$2[0], React.createElement("div", {
                      className: "controls"
                    }, React.createElement("button", {
                          onClick: (function (_e) {
                              return Curry._1(send, /* TogglePlayPause */0);
                            })
                        }, Util$ReactHooksTemplate.str(state[/* status */0] ? "Pause" : "Play")), React.createElement("input", {
                          max: playerState.duration.toString(),
                          min: 0,
                          step: 1.0,
                          type: "range",
                          value: playerState.time.toString(),
                          onChange: (function (e) {
                              return controls.seek(e.target.value);
                            })
                        }), match$3 ? React.createElement("button", {
                            onClick: (function (_e) {
                                return controls.unmute();
                              })
                          }, Util$ReactHooksTemplate.str("Un-mute")) : React.createElement("button", {
                            onClick: (function (_e) {
                                return controls.mute();
                              })
                          }, Util$ReactHooksTemplate.str("Mute")), Util$ReactHooksTemplate.str((playerState.volume * 100.0).toFixed().concat("%")), React.createElement("input", {
                          max: "1",
                          min: 0,
                          step: 0.01,
                          type: "range",
                          value: playerState.volume.toString(),
                          onChange: (function (e) {
                              return controls.volume(e.target.value);
                            })
                        }))));
}

var make = Player;

export {
  nextStrOfStatus ,
  make ,
  
}
/*  Not a pure module */
