export type PetListElement = {
  id: string;
  name: string;
  description: string;
};

export type CreatePetListElementCommand = {
  name: string;
  description: string;
};

export type DeletePetListElementCommand = {
  id: string;
};
