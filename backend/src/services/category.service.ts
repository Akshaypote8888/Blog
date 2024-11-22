import { Category } from "../models/Category";

export function getAllCategories(){
const categories = Category.findAll(); // select from categories

return categories;

}
