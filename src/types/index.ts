export interface Food {
  count?: string | number
  checked?: boolean
  spuId: string
  spuName: string
  spuDesc: string
  littleImageUrl: string
  currentPrice: string
  sale: string | number
}

export interface FoodMap {
  [key: string]: Food
}

export interface CheckedMap {
  [key: string]: {
    checked: boolean
  }
}
