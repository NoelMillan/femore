export interface Center {
    centerId: string,
    location: string,
    name: string,
    description: string,
    img: string,
    reviews: Review[],
    gallery: Gallery[],
    rate: number,
    mapLat: number,
    mapLng: number,
    mapNorth: number,
    mapSouth: number,
    mapWest: number,
    mapEast: number
}

export interface Review {
    firstName: string,
    lastName: string,
    center: string,
    review: string,
    rate: number
}

export interface Gallery {
    img: string
}