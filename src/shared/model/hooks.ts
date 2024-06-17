import { useSelector, type TypedUseSelectorHook, useDispatch } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector.withTypes<RootState>()
