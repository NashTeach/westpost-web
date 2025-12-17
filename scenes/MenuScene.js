import GameState from '../state/GameState.js';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu' });
  }

  create() {
    console.log('MenuScene loaded');

    this.add.text(640, 200, 'The Westport Independent', {
      fontSize: '40px',
      color: '#ffffff'
    }).setOrigin(0.5);

    const startButton = this.add.text(640, 360, '[ New Game ]', {
      fontSize: '26px',
      color: '#ffffff',
      backgroundColor: '#333333',
      padding: { x: 12, y: 8 }
    })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    startButton.on('pointerdown', () => {
      console.log('New Game clicked');
      GameState.reset();
      this.scene.start('Day');
    });

    this.add.text(640, 680,
      'Educational use — Web edition',
      { fontSize: '12px', color: '#666666' }
    ).setOrigin(0.5);
  }
}
