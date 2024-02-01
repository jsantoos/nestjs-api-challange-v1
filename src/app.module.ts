// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetController } from './controllers/assets.controller';
import { OrdersController } from './controllers/orders.controller';
import { AssetsService } from './services/assets.service';
import { OrdersService } from './services/orders.service';
import { Asset } from './entities/asset.entity';
import { Order } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nest_challenge.db',
      entities: [Asset, Order],
      synchronize: true, // Certifique-se de que está definido como true
    }),
    TypeOrmModule.forFeature([Asset, Order]),
  ],
  controllers: [AssetController, OrdersController],
  providers: [AssetsService, OrdersService],
})
export class AppModule {}
