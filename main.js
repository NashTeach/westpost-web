import BootScene from './scenes/BootScene.js';
import MenuScene from './scenes/MenuScene.js';
import DayScene from './scenes/DayScene.js';
import ArticleScene from './scenes/ArticleScene.js';
import SummaryScene from './scenes/SummaryScene.js';
import EndingScene from './scenes/EndingScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#111111',
  scene: [
    BootScene,
    MenuScene,
    DayScene,
    ArticleScene,
    SummaryScene,
    EndingScene
  ]
};

new Phaser.Game(config);
