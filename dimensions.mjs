// Amount of players we are going to display per image.
// The more players we display per image, the bigger the image becomes.
export const PLAYER_PER_IMAGE = 6

// Dimensions of the image. 
export const IMAGE_WIDTH = 300
export const IMAGE_HEIGHT = 50 * PLAYER_PER_IMAGE

// Dimensions for the outer background. 
export const OUTER_BACKGROUND_X = 0 
export const OUTER_BACKGROUND_Y = 0

// Dimensions for the inner background. 
export const INNER_BACKGROUND_X = (0.02 * IMAGE_WIDTH) 
export const INNER_BACKGROUND_Y = (0.02 * IMAGE_HEIGHT)

// Dimenions for each rectangle contained in the 
export const RECT_PADDING_X = .02 * IMAGE_WIDTH
export const RECT_PADDING_Y = .02 * IMAGE_HEIGHT
export const RECT_X = RECT_PADDING_X
export function RECT_Y(rect) { return rect * RECT_HEIGHT + RECT_PADDING_Y + (rect * RECT_PADDING_Y) }
export const RECT_WIDTH = IMAGE_WIDTH - RECT_PADDING_X * 2
export const RECT_HEIGHT = IMAGE_HEIGHT / PLAYER_PER_IMAGE - RECT_PADDING_Y * 2

// Dimensions for the placement number. 
export const STANDING_PADDING_X = 0.05 * RECT_WIDTH
export const STANDING_PADDING_Y = 0.15 * RECT_HEIGHT
export const STANDING_X = STANDING_PADDING_X + RECT_X
export function STANDING_Y(rect, textHeight) { return (RECT_HEIGHT - textHeight)/2 + RECT_Y(rect) + textHeight}
export const STANDING_WIDTH = 25


// Dimensions for the Icons that go next to player name.
export const ICON_PADDING_X = 0.03 * RECT_WIDTH
export const ICON_PADDING_Y = 0.05 * RECT_HEIGHT
export const ICON_X = STANDING_X + STANDING_WIDTH + ICON_PADDING_X
export function ICON_Y(rect) { return ICON_PADDING_Y + RECT_Y(rect) }
export const ICON_HEIGHT = RECT_HEIGHT - ICON_PADDING_Y * 2
export const ICON_WIDTH = RECT_WIDTH * .2 - ICON_PADDING_X * 2

// Dimensions for the name of the player in the stats block. 
export const NAME_PADDING_X = 0.01 * RECT_WIDTH
export const NAME_PADDING_Y = 0.05 * RECT_HEIGHT
export const NAME_X = ICON_X + ICON_WIDTH + NAME_PADDING_X
export function NAME_Y(rect) { return (RECT_HEIGHT / 2) + RECT_Y(rect) }

// Dimensions for the win loss record of the player. 
export const RECORD_PADDING_X = 0.05 * RECT_WIDTH
export const RECORD_PADDING_Y = 0.10 * RECT_HEIGHT
export const RECORD_X = NAME_X
export function RECORD_Y(rect, textHeight) { return NAME_Y(rect) + textHeight + RECORD_PADDING_Y}
