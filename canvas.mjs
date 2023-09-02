import * as fs from 'fs'
import { createCanvas, loadImage } from 'canvas'
import * as dimension from './dimensions.mjs'
import * as color from './colors.mjs'
import * as path from 'path'


const canvas = createCanvas(dimension.IMAGE_WIDTH, dimension.IMAGE_WIDTH)
const ctx = canvas.getContext('2d')

const DATA_FOLDER = 'data'
const ICON_FOLDER = 'icons'
const PLAYER_DATA = 'players.json'

const OUTPUT_FOLDER = 'output'
const OUTPUT_IMAGE = 'output.png'

async function drawStanding(player, Yplacement) {

    let name = player.username
    let wins = player.record.win
    let loss = player.record.loss
    let placement = player.placement

    //Creatin background color of rectangle that holds player stats. 
    ctx.fillStyle = color.INNER_BACKGROUND
    ctx.fillRect(dimension.RECT_X, dimension.RECT_Y(Yplacement), dimension.RECT_WIDTH, dimension.RECT_HEIGHT) 
    // Creating the retangle that will hold the persons stat. 
    ctx.strokeRect(dimension.RECT_X, dimension.RECT_Y(Yplacement), dimension.RECT_WIDTH, dimension.RECT_HEIGHT)

    //Creating number to show placement in leaderboards
    ctx.font = '40px sans-serif'
    ctx.fillStyle = color.getStandingColor(placement)

    let textHeight = ctx.measureText(placement).actualBoundingBoxAscent

    ctx.fillText(placement, dimension.STANDING_X, dimension.STANDING_Y(Yplacement, textHeight))

    //Creating icon 
    loadImage(path.join(DATA_FOLDER, ICON_FOLDER, `${(placement % 3) + 1}.png`)).then((image) => {
        ctx.drawImage(image, dimension.ICON_X, dimension.ICON_Y(Yplacement), dimension.ICON_WIDTH, dimension.ICON_HEIGHT)
    })

    ctx.fillStyle = "white"

    ctx.font = "15px sans-serif"

    ctx.fillText(name, dimension.NAME_X, dimension.NAME_Y(Yplacement))

    //Creating Win Lost Text 
    let recordText = `W ${wins} - L ${loss}`

    textHeight = ctx.measureText(recordText).actualBoundingBoxAscent
    
    ctx.fillText(recordText, dimension.RECORD_X, dimension.RECORD_Y(Yplacement, textHeight))

    return 0
}

async function setUpCanvas() {

    // Outer background colors for canvas. 
    ctx.fillStyle = color.OUTER_BACKGROUND
    ctx.fillRect(dimension.OUTER_BACKGROUND_X, dimension.OUTER_BACKGROUND_Y, dimension.IMAGE_WIDTH, dimension.IMAGE_HEIGHT)
}

function calculateWinRate(player) {

    return player.record.win / (player.record.loss + 1)
}

async function drawLeaderboards() {

    let testData = fs.readFileSync(path.join(DATA_FOLDER, PLAYER_DATA), { encoding: 'utf8' })

    let jsonData = JSON.parse(testData)

    jsonData.sort((a, b) => {
        return calculateWinRate(b) - calculateWinRate(a)
    })

    console.log(jsonData)

    setUpCanvas()

    for (let key in jsonData) {

        let player = jsonData[key]
        player['placement'] = Number(key) + 1

        drawStanding(player, key)
    }

    const out = fs.createWriteStream(path.join(OUTPUT_FOLDER, OUTPUT_IMAGE))

    const stream = canvas.createPNGStream()
    stream.pipe(out)
}



drawLeaderboards()
