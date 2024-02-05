// src/orders/controllers/asset.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetService } from '../services/assets.service';
import { Asset } from '../entities/asset.entity';

@Controller('api/assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  findAll(): Promise<Asset[]> {
    return this.assetService.getAllAssets();
  }

  @Post()
  create(@Body() assetData: { symbol: string }): Promise<Asset> {
    return this.assetService.createAsset(assetData.symbol);
  }
}
