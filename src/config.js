import { Scale, WEBGL } from 'phaser'

/** @type {import('phaser').Types.Core.GameConfig} */
const config = {
    type: WEBGL,
    parent: 'root',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH,
    },
    physics: {
        default: 'matter',
        matter: {
          gravity: {
            y: 1
          },
          debug: true,
          debugBodyColor: 0x18c747
        }
    },
    dom: {
        createContainer: true
    },
    width: 1280,
    height: 720
}

export default config