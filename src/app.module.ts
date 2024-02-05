// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetController } from './controllers/assets.controller';
import { OrderController } from './controllers/orders.controller';
import { AssetService } from './services/assets.service';
import { OrderService } from './services/orders.service';
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
  controllers: [AssetController, OrderController],
  providers: [AssetService, OrderService],
})
export class AppModule {}
