export default class ArticleScene extends Phaser.Scene {
  constructor() {
    super('Article');
  }

  create() {
    this.effects = { government: 1, public: 1, resistance: 0 };

    this.add.text(640, 120, 'Article Content', {
      fontSize: '28px',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.add.text(640, 260,
      'A controversial article is prepared for publication.',
      { fontSize: '20px', color: '#ccc', align: 'center' }
    ).setOrigin(0.5);

    const approve = this.add.text(640, 480, 'Approve for Publication', {
      fontSize: '22px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();

    approve.on('pointerdown', () => {
      this.scene.start('Summary', { effects: this.effects });
    });
  }
}
