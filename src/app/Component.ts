import { AnimeParams } from "animejs";

const anime = require("animejs");

export default class Component {
  states: { [name: string]: AnimeParams[] } = {};

  addState(name: string, state: AnimeParams[]) {
    this.states[name] = state;
  }

  setState(name: string) {
    for (const param of this.states[name]) anime(param);
  }
}
