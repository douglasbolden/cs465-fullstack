export interface Blog {
    _id: string, // internal MongoDB primary key 
    code: string,
    title: string,
    date: Date,
    description: string
}
