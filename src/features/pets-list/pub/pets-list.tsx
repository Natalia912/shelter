import { revalidatePath } from "next/cache";
import { petsRepository } from "../pets.repository";
import { PetItem } from "../ui/pet-item";

export const PetsList = async ({ pagePath }: { pagePath: string }) => {
  const petsList = await petsRepository.getPetsList();

  const handleDeleteAction = async (petId: string) => {
    "use server";
    await petsRepository.deletePetElement({ id: petId });
    revalidatePath(pagePath);
  };
  return (
    <div className="flex flex-col gap-3">
      {petsList.map((pet) => (
        <PetItem
          pet={pet}
          key={pet.id}
          onDelete={handleDeleteAction.bind(null, pet.id)}
        />
      ))}
    </div>
  );
};
