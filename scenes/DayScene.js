import GameState from '../state/GameState.js';

export default class DayScene extends Phaser.Scene {
  constructor() {
    super('Day');
  }

  create() {
    this.add.text(640, 200, `Day ${GameState.state.day}`, {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);

    const btn = this.add.text(640, 360, 'Review Article', {
      fontSize: '22px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();

    btn.on('pointerdown', () => {
      this.scene.start('Article');
    });
  }
}
