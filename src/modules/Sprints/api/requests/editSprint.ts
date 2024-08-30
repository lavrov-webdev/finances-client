import { GetSprintDto, TEditSprintDto } from "@modules/Sprints/types";
import { appAxios } from "@system/axios";

export const editSprint = async ({
  editSprintDto,
  id,
}: {
  editSprintDto: TEditSprintDto;
  id: number;
}) => {
  const { data } = await appAxios.patch(
    `/sprints/${id}`,
    editSprintDto,
  );
  return GetSprintDto.parse(data);
};