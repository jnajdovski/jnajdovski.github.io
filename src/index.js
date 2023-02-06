import { Game } from 'phaser'
import config from './config'

import GameWorld from './scenes/GameWorld'
import BootScene from './scenes/BootScene'

const game = new Game(config)

game.scene.add('boot', new BootScene())
game.scene.add('world', new GameWorld())
game.scene.start('boot')