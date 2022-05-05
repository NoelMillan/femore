import { Review } from './center';
export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    centersVisited: number;
    reviews: Review[];
}
