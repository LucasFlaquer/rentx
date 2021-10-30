import csvParse from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = csvParse();
      stream.pipe(parseFile); // repassa o pedaço lido do arquvio para o parseFile
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;
      const existingCategory = this.categoriesRepository.findByName(name);
      if (!existingCategory) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
