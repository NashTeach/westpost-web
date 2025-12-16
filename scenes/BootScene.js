export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.json('days', 'data/days.json');
    this.load.json('articles', 'data/articles.json');
    this.load.json('endings', 'data/endings.json');
  }

  create() {
    this.scene.start('Menu');
  }
}
