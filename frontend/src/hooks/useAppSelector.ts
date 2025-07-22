import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// Custom hook giúp dùng selector có type gợi ý
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
