import { Scene } from 'phaser'


class BootScene extends Scene {
    create() {
        this.cameras.main.setBackgroundColor('#34c3eb')

        this.startLoader()
    }

    startLoader(){
        this.load.once('start', this.loadGameAssets, this)
        this.load.once('complete', () => this.nextScene())
        this.load.start()
    }

    loadGameAssets() {
        console.log('Loading assets');
        this.load.image('background', '/assets/background.png')
        this.load.image('tiles1', '/assets/tiles/tiles1.png')
        this.load.tilemapTiledJSON('ground', '/assets/tiles/ground.json')
    }

    nextScene() {
        this.scene.start('world')
    }
}

export default BootScene