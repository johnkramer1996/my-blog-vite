import get from 'lodash.get'
import React from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { Input, InputPropsUI } from 'shared/ui'
import { InputErrorMessageForm } from './InputErrorMessageForm'
import { IInputHTML, ITextareaHTML } from '../input/Input'

interface IInputFormProps<TFormValues extends FieldValues> extends Omit<InputPropsUI, 'hasError' | 'errorSlot'> {
  name: Path<TFormValues>
  onChange?: (name: Path<TFormValues>, value: string) => void
  onBlur?: (name: Path<TFormValues>, value: string) => void
}

type OmitProperty = 'onBlur' | 'onChange' | 'name'

interface IInputFormHTML<TFormValues extends FieldValues> extends IInputFormProps<TFormValues>, Omit<IInputHTML, OmitProperty> {}
interface ITextareaFormHTML<TFormValues extends FieldValues> extends IInputFormProps<TFormValues>, Omit<ITextareaHTML, OmitProperty> {}

type InputFormProps<TFormValues extends FieldValues> = IInputFormHTML<TFormValues> | ITextareaFormHTML<TFormValues>

export const InputForm = <TFormValues extends Record<string, unknown>>(props: InputFormProps<TFormValues>) => {
  const { name, onChange, onBlur, ...rest } = props
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext<TFormValues>()

  const errorMessages = get(errors, name)
  const hasError = !!(errors && errorMessages)

  const onChangeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onChange && onChange(name, e.target.value)
  }
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(name, e.target.value)
  }

  return (
    <div className='form__input'>
      <Input
        {...rest}
        {...(register && register(name, { onChange: onChangeHandler, onBlur: onBlurHandler }))}
        filled={Boolean(getValues(name))}
        autoComplete='off'
        hasError={hasError && !rest.disabled}
        errorSlot={<InputErrorMessageForm errors={errors} name={name} />}
      />
    </div>
  )
}
