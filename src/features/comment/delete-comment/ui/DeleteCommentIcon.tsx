import { ButtonProps, Icon } from 'shared/ui'
import { ButtonHTMLAttributes } from 'react'
import { useDeletePopup } from '../lib/use-delete-popup'
import { Comment } from 'entities/comment'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  slug: string
  comment: Comment
  parentComment?: Comment
  onComplete?: () => void
  meta: { page?: number; limit?: number }
}

type Props = ButtonProps & IProps

export const DeleteCommentIcon = (props: Props) => {
  const { slug, comment, parentComment, onComplete, meta, ...rest } = props
  const onDelete = useDeletePopup(
    {
      slug,
      comment,
      meta: {
        parentId: comment.parentId || undefined,
        parentParentId: parentComment?.parentId || undefined,
        ...meta,
      },
    },
    onComplete
  )

  return (
    <button onClick={onDelete} {...rest}>
      <Icon type='trash' color='red' />
    </button>
  )
}
