import { GameObjects, Scene, Tilemaps } from 'phaser'

class GameWorld extends Scene {
    /**
     * @type {GameObjects.TileSprite}
     */
    background = null

    /**
     * @type {Tilemaps.Tilemap}
     */
    ground = null

    create() {
        this.cameras.main.setBackgroundColor('#0071bc')
        this.background = this.add.tileSprite(0, 505, this.cameras.main.width, 434, 'background')
        this.background.setOrigin(0, 0.5)

        this.ground = this.make.tilemap({key: 'ground'})
        let tileset = this.ground.addTilesetImage('tiles1')
        let groudLayer = this.ground.createLayer(0, tileset, -300, 100)
        groudLayer.setCollisionByProperty({ type: 'grass' })

        this.matter.world.convertTilemapLayer(groudLayer)
        this.matter.add.rectangle(
            500, 100,
            100, 100,
            { isStatic: false }
        );

        
        this.children.add(this.background)
    }

    update(time, delta) {
        if (this.background) {
            this.background.tilePositionX += (0.08 * delta);
        }
    }

}

export default GameWorld