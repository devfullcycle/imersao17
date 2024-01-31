import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  image_url: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}

//ordem de compra
//produto, price
//http ---> api do wesley

//cliente
//nome, price, image_url
