import classNames from 'classnames'
import { Post } from 'entities/post'
import { PostCardLoader } from 'entities/post/ui/post-card-loader/PostCardLoader'
import { PostCard, PostCardType } from 'entities/post/ui/post-card/PostCard'
import { QueryFlags } from 'shared/model'
import { LoaderWrapper, SectionTitle } from 'shared/ui'

export interface PostListProps extends QueryFlags {
  posts: Post[]
  type?: PostCardType
  renderPost?: (post: Post) => React.ReactNode
  afterPostsSlot?: React.ReactNode
  isLoadingMoreItems?: boolean
  afterSlot?: React.ReactNode
  className?: string
}

export const PostList = (props: PostListProps) => {
  const {
    posts,
    type = 'horizontal',
    renderPost,
    afterPostsSlot: renderPostMore,
    isLoading,
    isFetching,
    isLoadingMoreItems: isLoadingShowMore,
    afterSlot,
    className,
  } = props

  const hasPosts = Boolean(posts.length)
  const isVertical = type === 'vertical'

  return (
    <>
      {!isLoading && !hasPosts ? (
        <div className='text-center'>
          <SectionTitle className='mb-30'>Nothing found</SectionTitle>
        </div>
      ) : (
        <div className={classNames('items', { 'items--fetching': isFetching, row: isVertical }, className)}>
          <LoaderWrapper
            loader={(isVertical ? [1, 2] : [1]).map((_, i) => (
              <PostCardLoader key={i} className={classNames('', { 'col-lg-6 col-12': isVertical })} />
            ))}
            isLoading={isLoading}
          >
            {renderPost ? posts.map(renderPost) : posts.map((post) => <PostCard key={post.slug} post={post} className='' />)}
            {renderPostMore}
            {isLoadingShowMore && <PostCardLoader className=''></PostCardLoader>}
          </LoaderWrapper>
        </div>
      )}
      {hasPosts && afterSlot}
    </>
  )
}
