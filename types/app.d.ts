/**
 * Custom utility types
 */
type Nullable<T> = T | null

type Keys<T extends Record<string, unknown>> = keyof T

type Values<T extends Record<string, unknown>> = T[Keys<T>]

type Indexed<T = unknown> = { [key: string]: T }

/**
 * Type aliases
 */
type Phone = string

type Email = string

type Id = string

type DateIso = string

type Timestamp = number

type Penny = number

type Url = string

type Color = string

/**
 * Shared kernel
 */

/**
 * ⚠️ FSD
 *
 * Its hack way to export redux infering types from @/app
 * and use it in @/shared/model/hooks.ts
 */

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type RootState = import('../src/app/app.store').RootState
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type AppDispatch = import('../src/app/app.store').AppDispatch
