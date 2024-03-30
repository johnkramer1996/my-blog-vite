declare global {
  /**
   * Custom utility types
   */
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T

  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export type Indexed<T = unknown> = { [key: string]: T }

  /**
   * Type aliases
   */
  export type Phone = string

  export type Email = string

  export type Id = string

  export type DateIso = string

  export type Timestamp = number

  export type Penny = number

  export type Url = string

  export type Color = string

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
  declare type RootState = import('../src/app/app.store').RootState
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch = import('../src/app/app.store').AppDispatch
}

export {}
