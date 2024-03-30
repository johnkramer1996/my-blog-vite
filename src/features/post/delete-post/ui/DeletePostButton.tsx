import { Button, ButtonProps } from 'shared/ui'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { useDeletePopup } from '../lib/use-delete-popup'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  slug: string
  onComplete?: () => void
  children: ReactNode
}

type Props = ButtonProps & IProps

export const DeletePostButton = (props: Props) => {
  const { slug, onComplete, ...rest } = props
  const onDelete = useDeletePopup({ slug }, onComplete)

  return (
    <Button onClick={onDelete} {...rest}>
      {props.children}
    </Button>
  )
}
