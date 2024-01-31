import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: '66805003-f9a2-4772-b577-d5ff66207707',
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      image_url: 'http://localhost:9000/products/2.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      image_url: 'http://localhost:9000/products/3.png',
    },
    {
      id: 'ef3d9a49-4c73-4192-97dd-55e21c0e2707',
      name: 'Product 4',
      description: 'Description 4',
      price: 400,
      image_url: 'http://localhost:9000/products/4.png',
    },
    {
      id: '6d602b3a-1e72-4b03-a29c-14095e57027b',
      name: 'Product 5',
      description: 'Description 5',
      price: 500,
      image_url: 'http://localhost:9000/products/5.png',
    },
    {
      id: 'dad6f8fb-3149-4d0b-861e-03d29c6accf0',
      name: 'Product 6',
      description: 'Description 6',
      price: 600,
      image_url: 'http://localhost:9000/products/6.png',
    },
    {
      id: '61c176d5-f4f9-4fbd-a892-41058422868e',
      name: 'Product 7',
      description: 'Description 7',
      price: 700,
      image_url: 'http://localhost:9000/products/7.png',
    },
    {
      id: 'ed394062-14bc-4ff2-bf43-a77473322171',
      name: 'Product 8',
      description: 'Description 8',
      price: 800,
      image_url: 'http://localhost:9000/products/8.png',
    },
    {
      id: '4e6d8a64-5389-4623-ad40-e3f95b0607f7',
      name: 'Product 9',
      description: 'Description 9',
      price: 900,
      image_url: 'http://localhost:9000/products/9.png',
    },
    {
      id: '924e4979-f471-4a3f-bf52-d3316485c06c',
      name: 'Product 10',
      description: 'Description 10',
      price: 1000,
      image_url: 'http://localhost:9000/products/10.png',
    },
    {
      id: '80a22ccc-50f6-40ed-a18d-8cd152ae40f9',
      name: 'Product 11',
      description: 'Description 11',
      price: 1100,
      image_url: 'http://localhost:9000/products/11.png',
    },
    {
      id: '740d95cb-c9be-4c2c-992d-8ad53e6b5d0c',
      name: 'Product 12',
      description: 'Description 12',
      price: 1200,
      image_url: 'http://localhost:9000/products/12.png',
    },
    {
      id: '04c4353a-3f6d-4272-a8f2-44b82c05ecc0',
      name: 'Product 13',
      description: 'Description 13',
      price: 1300,
      image_url: 'http://localhost:9000/products/13.png',
    },
    {
      id: '8db7d6a5-43f0-420a-8023-7b37b21bec27',
      name: 'Product 14',
      description: 'Description 14',
      price: 1400,
      image_url: 'http://localhost:9000/products/14.png',
    },
    {
      id: '557be765-4f09-49b1-bd33-b7e30fc7316c',
      name: 'Product 15',
      description: 'Description 15',
      price: 1500,
      image_url: 'http://localhost:9000/products/15.png',
    },
    {
      id: '0afa7630-4fc1-4d69-beed-4f8f15becadc',
      name: 'Product 16',
      description: 'Description 16',
      price: 1600,
      image_url: 'http://localhost:9000/products/16.png',
    },
    {
      id: '2261af8a-e453-42e2-b2b0-ea268bb11a41',
      name: 'Product 17',
      description: 'Description 17',
      price: 1700,
      image_url: 'http://localhost:9000/products/17.png',
    },
    {
      id: 'fbe61a31-7bb4-4e53-9268-9138d4d038d3',
      name: 'Product 18',
      description: 'Description 18',
      price: 1800,
      image_url: 'http://localhost:9000/products/18.png',
    },
    {
      id: '506610a1-ba99-4c14-a7b2-3c52877e8ec2',
      name: 'Product 19',
      description: 'Description 19',
      price: 1900,
      image_url: 'http://localhost:9000/products/19.png',
    },
    {
      id: 'eb296629-1fce-43ca-8413-1b3bddd07106',
      name: 'Product 20',
      description: 'Description 20',
      price: 2000,
      image_url: 'http://localhost:9000/products/20.png',
    },
  ]);

  await app.close();
}
bootstrap();
