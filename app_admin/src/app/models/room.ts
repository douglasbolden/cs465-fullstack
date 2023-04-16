export interface Room {
    _id: string, // internal MongoDB primary key 
    code: string,
    name: string,
    description: string,
    rate: string,
    link: string,
    image: string
}
