import { DatePicker, DatePickerProps } from '@gravity-ui/date-components';
import { dateTime } from '@gravity-ui/date-utils';
import { DATE_FORMAT } from "@system/consts";
import { FC } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type Props = {
    name: string
} & DatePickerProps

export const FormDatePicker: FC<Props> = ({ name, ...rest }) => {
    const form = useFormContext()
    useWatch({ control: form.control, name })

    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field, fieldState }) => <DatePicker
                {...field}
                {...rest}
                validationState={fieldState.invalid ? "invalid" : undefined}
                errorMessage={fieldState.error?.message}
                onUpdate={(date) => form.setValue(name, date?.format(DATE_FORMAT))}
                value={dateTime({ input: form.getValues(name), format: DATE_FORMAT })}
                format={DATE_FORMAT}
            />
            }
        />
    )
}