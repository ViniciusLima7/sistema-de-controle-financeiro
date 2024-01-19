import { useEffect, useState } from "react";
import { ITable } from "../../../interfaces/ITable";
import Actions from "../../Actions";
import Row from "../Row";
import { getTransaction } from "../../../services/db/firestore/transactions/getTransaction";
import { ITransaction } from "../../../interfaces/ITransaction";
import { getCategoryNameById } from "../../../services/db/firestore/categories/getCategories";
import { getNamesForIds } from "../../../utils/getNamesForId";
import { getSubCategoryNameById } from "../../../services/db/firestore/subcategories/getSubCategories";
import { getResponsibleNameById } from "../../../services/db/firestore/responsible/getResponsible";
import { format } from "date-fns";

export default function TableItem({ title }: ITable) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [categoryNames, setCategoryNames] = useState<Record<string, string>>(
    {}
  );
  const [subCategoryNames, setSubCategoryNames] = useState<
    Record<string, string>
  >({});
  const [responsibleNames, setResponsibleNames] = useState<
    Record<string, string>
  >({});
  useEffect(() => {
    if (location.pathname === "/cadastro") {
      getTransaction(setTransactions);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (transactions.length > 0) {
      getNamesForIds(
        getCategoryNameById,
        transactions,
        "FK_IdCategory",
        setCategoryNames
      );
      getNamesForIds(
        getSubCategoryNameById,
        transactions,
        "FK_IdSubCategory",
        setSubCategoryNames
      );
      getNamesForIds(
        getResponsibleNameById,
        transactions,
        "FK_Responsible",
        setResponsibleNames
      );
    }
  }, [transactions]);

  return (
    <>
      {transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <Row>
              {format(transaction?.date?.seconds * 1000, "dd/MM/yyyy") ||
                "Carregando"}
            </Row>
            <Row>
              {categoryNames[transaction.FK_IdCategory] || "Carregando..."}
            </Row>
            <Row>
              {subCategoryNames[transaction.FK_IdSubCategory] ||
                "Carregando..."}
            </Row>
            <Row>{transaction.title}</Row>
            <Row>
              R${" "}
              {transaction.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </Row>
            <Row>
              {responsibleNames[transaction.FK_Responsible] || "Carregando..."}
            </Row>
            <Row
              justifyContent="space-evenly"
              display="flex"
              marginLeft="-20px"
            >
              <Actions title={title} data={transaction} />
            </Row>
          </tr>
        );
      })}
    </>
  );
}
