import { dbClient } from "@/lib/db";
import { cache } from "react";
import {
  CreatePetListElementCommand,
  DeletePetListElementCommand,
  PetListElement,
} from "./model/types";

class PetsRepository {
  getPetsList = cache((): Promise<PetListElement[]> => dbClient.pet.findMany());

  createPetElement = (
    command: CreatePetListElementCommand,
  ): Promise<PetListElement> => {
    return dbClient.pet.create({ data: command });
  };
  deletePetElement = (command: DeletePetListElementCommand) => {
    return dbClient.pet.delete({ where: { id: command.id } });
  };
}

export const petsRepository = new PetsRepository();
