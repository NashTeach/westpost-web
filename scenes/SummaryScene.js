import GameState from '../state/GameState.js';

export default class SummaryScene extends Phaser.Scene {
  constructor() {
    super('Summary');
  }

  init(data) {
    this.effects = data.effects;
  }

  create() {
    GameState.applyEffects(this.effects);

    this.add.text(640, 200, 'Consequences', {
      fontSize: '28px',
      color: '#ffffff'
    }).setOrigin(0.5);

    const p = GameState.state.pressures;

    this.add.text(640, 300,
      `Government: ${p.government}\nPublic: ${p.public}\nResistance: ${p.resistance}`,
      { fontSize: '20px', color: '#ccc', align: 'center' }
    ).setOrigin(0.5);

    const next = this.add.text(640, 480, 'End Day', {
      fontSize: '22px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();

    next.on('pointerdown', () => {
      GameState.advanceDay();
      this.scene.start('Day');
    });
  }
}
