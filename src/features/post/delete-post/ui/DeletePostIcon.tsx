import { ButtonProps, Icon } from 'shared/ui'
import { ButtonHTMLAttributes } from 'react'
import { useDeletePopup } from '../lib/use-delete-popup'
import { IconSize } from 'shared/ui/icon/Icon'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  slug: string
  onComplete?: () => void
  iconSize?: IconSize
}
type Props = IProps & ButtonProps

export const DeletePostIcon = (props: Props) => {
  const { slug, onComplete, iconSize: size, ...rest } = props
  const onDelete = useDeletePopup({ slug }, onComplete)

  return (
    <button onClick={onDelete} {...rest}>
      <Icon type='trash' color='red' size={size} />
    </button>
  )
}
