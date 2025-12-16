const DEFAULT_STATE = {
  day: 1,
  pressures: {
    government: 0,
    public: 0,
    resistance: 0
  }
};

const GameState = {
  state: JSON.parse(localStorage.getItem('westport')) || structuredClone(DEFAULT_STATE),

  save() {
    localStorage.setItem('westport', JSON.stringify(this.state));
  },

  reset() {
    this.state = structuredClone(DEFAULT_STATE);
    this.save();
  },

  applyEffects(effects) {
    for (const key in effects) {
      this.state.pressures[key] += effects[key];
    }
    this.save();
  },

  advanceDay() {
    this.state.day += 1;
    this.save();
  }
};

export default GameState;
