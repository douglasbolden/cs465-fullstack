export interface News {
    _id: string, // internal MongoDB primary key 
    code: string
    image: string
    postTitle: string
    postDate: Date
    posterName: string
    postData: string
}
