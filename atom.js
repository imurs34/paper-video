import { atom } from "jotai";

const activityAtom = atom({
  action: "playing",
  time: 0,
  slide: 0,
});
const highlightAtom = atom(null);
const paragraphAtom = atom(null);
const lockAtom = atom(false);
const frameHeightAtom = atom();
const playingAtom = atom(false);
const percentAtom = atom(0);
const currentTimeAtom = atom("00:00");
const currentAtom = atom(0);
const durationTimeAtom = atom("00:00");
const durationAtom = atom();
const jumpAtom = atom();
const withFrameAtom = atom(true);
const withVideoAtom = atom(false);
const darkModeAtom = atom(false);
const mobileModeAtom = atom(false);
export {
  activityAtom,
  playingAtom,
  paragraphAtom,
  lockAtom,
  withFrameAtom,
  withVideoAtom,
  darkModeAtom,
  mobileModeAtom,
  frameHeightAtom,
  currentTimeAtom,
  percentAtom,
  durationTimeAtom,
  durationAtom,
  jumpAtom,
  currentAtom,
  highlightAtom,
};
