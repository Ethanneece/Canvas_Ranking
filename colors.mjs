//Colors for displaying the placement of each player
export const FIRST_PLACE = '#FFBF00'
export const SECOND_PLACE = '#C0C0C0'
export const THIRD_PLACE = '#CD7F32'
export const DEFAULT_PLACE = '#787176'

//Background colors
export const INNER_BACKGROUND = '#323437'
export const OUTER_BACKGROUND = '#1f1f21'

//Color of the players name that is displayed. 
export const COLOR_NAME = '#FDF6E4'

//Color for the win loss that is displayed under the player name. 
export const COLOR_WIN_LOSS = '#F5FEFD'

//Color for the rectangle that contains player stats. 
export const COLOR_RECT = '#F5FEFD'


export function getStandingColor(placement) {

    switch(placement) { 

        case 1: 
            return FIRST_PLACE
        case 2: 
            return SECOND_PLACE
        case 3: 
            return THIRD_PLACE
        default: 
            return DEFAULT_PLACE
    }
}