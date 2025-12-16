import GameState from '../state/GameState.js';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    this.add.text(640, 200, 'The Westport Independent', {
      fontSize: '40px',
      color: '#ffffff'
    }).setOrigin(0.5);

    const start = this.add.text(640, 350, 'New Game', {
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();

    start.on('pointerdown', () => {
      GameState.reset();
      this.scene.start('Day');
    });

    this.add.text(640, 680,
      'Educational use — Web edition',
      { fontSize: '12px', color: '#666' }
    ).setOrigin(0.5);
  }
}
