import { ProductDto } from '../dtos/product.dto'
import { Product } from '../models/product.model'

export const productMapper = (dto: ProductDto): Product => {
  return {
    id: dto.id,
    categoryId: dto.categoryId,
    name: dto.name,
    label: dto.badge,
    subname: dto.subtitle,
    price: dto.discountPrice ?? dto.price,
    oldPrice: dto.price,
    image: dto.image,
  }
}
