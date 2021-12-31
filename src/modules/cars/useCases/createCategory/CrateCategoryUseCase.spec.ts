import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("Should be able to Create a new Category", async () => {
    createCategory.execute({
      name: "Category 1",
      description: "description 1",
    });
    const categories = await categoriesRepositoryInMemory.list();
    expect(categories.length).toBe(1);
  });

  it("Should not be able to Create a new Category with existing name", async () => {
    expect(async () => {
      await createCategory.execute({
        name: "Category 1",
        description: "description 1",
      });
      await createCategory.execute({
        name: "Category 1",
        description: "description 1",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
