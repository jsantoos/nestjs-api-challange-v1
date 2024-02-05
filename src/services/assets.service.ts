// src/orders/services/asset.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from '../entities/asset.entity';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {}

  async getAllAssets(): Promise<Asset[]> {
    return this.assetRepository.find();
  }

  async createAsset(symbol: string): Promise<Asset> {
    const asset = this.assetRepository.create({ symbol });
    return this.assetRepository.save(asset);
  }
}
