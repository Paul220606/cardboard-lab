export type SlotType = 'image' | 'text' | 'number' | 'icon'

export interface SlotStyle {
    fontSize?: number
    fontWeight?: 'normal' | 'bold'
    color?: string
    align?: 'left' | 'center' | 'right'
    background?: string
}

export interface Slot {
    id: string
    name: string
    type: SlotType
    x: number
    y: number
    width: number
    height: number
    style: SlotStyle
}

export interface CardTemplate {
    id: string
    name: string
    width: number 
    height: number
    background: string
    slots: Slot[]
}

export interface CardDef {
    id: string
    templateId: string
    values: Record<string, string | number>
    copies: number
}

export type Zone = 'deck' | 'discard' | 'table' | `hand:${string}`

export interface CardInstance {
    id: string
    defId: string
    zone: Zone
    faceUp: boolean
    x?: number
    y?: number
}

export type DieSides = 2 | 4 | 6 | 8 | 10 | 12 | 20

export interface Die {
    id: string
    sides: DieSides
    value: number
}