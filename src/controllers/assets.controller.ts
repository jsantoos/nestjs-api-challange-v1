import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetsService } from '../services/assets.service';
import { Asset } from '../entities/asset.entity';

@Controller('api/assets')
export class AssetController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() assetData: any): Promise<Asset[]> {
    return this.assetsService.createAsset(assetData);
  }

  @Get()
  getAll(): Promise<Asset[]> {
    return this.assetsService.getAllAssets();
  }
}
