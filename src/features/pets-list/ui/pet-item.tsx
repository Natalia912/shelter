import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PetListElement } from "../model/types";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

export const PetItem = ({
  pet,
  onDelete,
}: {
  pet: PetListElement;
  onDelete: () => Promise<void>;
}) => {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => await onDelete());
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
        <CardDescription>{pet.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
