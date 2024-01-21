import { ICategory } from "../interfaces/ICategory";
import { IEconomy } from "../interfaces/IEconomy";
import { IResponsible } from "../interfaces/IResponsible";
import { ISubCategory } from "../interfaces/ISubCategory";
import { ITransaction } from "../interfaces/ITransaction";

interface ItemWithIdField {
  FK_IdCategory?: string;
  FK_IdSubCategory?: string;
  FK_IdResponsible?: string;
}

export async function getNamesForIds(
  getNameByIdFunction: (id: string) => Promise<string>,
  items: (ITransaction | ICategory | ISubCategory | IEconomy | IResponsible)[],
  idFieldName: "FK_IdCategory" | "FK_IdSubCategory" | "FK_IdResponsible",
  setNames: React.Dispatch<React.SetStateAction<Record<string, string>>>
) {
  try {
    const itemIds: string[] = items
      .map((item) => (item as ItemWithIdField)[idFieldName])
      .filter((id): id is string => id !== undefined);
    const itemNamePromises = itemIds.map((itemId) =>
      getNameByIdFunction(itemId)
    );
    const itemNamesArray = await Promise.all(itemNamePromises);
    const itemNamesObj: Record<string, string> = {};
    itemIds.forEach((itemId, index) => {
      itemNamesObj[itemId] = itemNamesArray[index];
    });
    setNames(itemNamesObj);
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
}
