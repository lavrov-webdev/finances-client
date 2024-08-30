import { GetTransactionDto, TCreateTransactionDto } from "@modules/Transactions/types";
import { appAxios } from "@system/axios";

export const createTransaction = async (transaction: TCreateTransactionDto) => {
    const { data } = await appAxios.post("/transactions", transaction);
    return GetTransactionDto.parse(data);
  };