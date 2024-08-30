import { FormAmountInput, FormDatePicker, FormProvider } from '@components/Form';
import { FormRow } from '@gravity-ui/components';
import { Button } from '@gravity-ui/uikit';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditSprintDto, TGetSprintDto } from '@modules/Sprints/types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  sprint: TGetSprintDto,
};

export const EditSprintForm: FC<Props> = ({ sprint }) => {
  const form = useForm({
    resolver: zodResolver(EditSprintDto),
    defaultValues: {
      ...sprint
    }
  })
  const su = (data: any) => {
    console.log({ data })
  }
  return <form onSubmit={form.handleSubmit(su)}>
    <FormProvider {...form}>
      <FormRow label="Стартовая сумма">
        <FormAmountInput name="startSum" />
      </FormRow>
      <FormRow label="Дата начала">
        <FormDatePicker name="startDate" />
      </FormRow>
      <FormRow label="Дата конца">
        <FormDatePicker name="endDate" />
      </FormRow>
      <Button type="submit">
        Редактировать
      </Button>
    </FormProvider>
  </form>
};
