export interface Meal {
    _id: string, // internal MongoDB primary key 
    code: string,
    mealName: string,
    mealType: string,
    image: string,
    link: string,
    description: string
}
