export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}


export interface PostQuery {
    posts: Post[]
}

export interface Post {
    id: number,
    title: string
}