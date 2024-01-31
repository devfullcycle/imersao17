import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateOrderDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  card_hash: string;
}

export class OrderItemDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @MaxLength(36)
  @IsString()
  @IsNotEmpty()
  product_id: string;
}
