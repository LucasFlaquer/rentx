import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, { name, description, created_at: new Date() });
    this.categories.push(category);
  }
  public list(): Category[] {
    return this.categories;
  }

  public findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}