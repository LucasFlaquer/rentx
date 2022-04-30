import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createcarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createcarUseCase = new CreateCarUseCase(carsRepository);
  });
  it("should be able to create a new car", async () => {
    await createcarUseCase.execute({
      name: "Ferrari",
      description: "Ferrari",
      daily_rate: 100,
      brand: "Ferrari",
      fine_amount: 100,
      license_plate: "12345",
      category_id: "5f4d7c7e-f9b7-4d4a-b1b0-f9b7d4e8b9e1",
    });
  });
  it("should not be able to create a car with an existing license plate", () => {
    expect(async () => {
      await createcarUseCase.execute({
        name: "Ferrari",
        description: "Ferrari",
        daily_rate: 100,
        brand: "Ferrari",
        fine_amount: 100,
        license_plate: "12345",
        category_id: "5f4d7c7e-f9b7-4d4a-b1b0-f9b7d4e8b9e1",
      });
      await createcarUseCase.execute({
        name: "Ferrari 2",
        description: "Ferrari 2",
        daily_rate: 100,
        brand: "Ferrari",
        fine_amount: 100,
        license_plate: "12345",
        category_id: "5f4d7c7e-f9b7-4d4a-b1b0-f9b7d4e8b9e1",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  // it("should not be able to create a car with available true by default", async () => {
  //   const car = await createcarUseCase.execute({
  //     name: "Ferrari3",
  //     description: "Ferrari",
  //     daily_rate: 100,
  //     brand: "Ferrari",
  //     fine_amount: 100,
  //     license_plate: "12345",
  //     category_id: "5f4d7c7e-f9b7-4d4a-b1b0-f9b7d4e8b9e1",
  //   });
  //   console.log("------------------");
  //   console.log(car);

  //   expect(car.available).toBe(true);
  // });
});
