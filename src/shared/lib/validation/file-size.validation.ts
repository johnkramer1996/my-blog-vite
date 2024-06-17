export const MAX_FILE_SIZE = (10 << 10) << 10

export const fileSizeValidation =
  (maxFileSize = MAX_FILE_SIZE) =>
  (file: File) =>
    !file || (!!file && file.size <= maxFileSize)
