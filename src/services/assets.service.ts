// src/services/assets.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from '../entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {}

  async createAsset(assetData: any): Promise<Asset[]> {
    const asset = this.assetRepository.create(assetData);
    return this.assetRepository.save(asset);
  }

  async getAllAssets(): Promise<Asset[]> {
    return this.assetRepository.find();
  }
}
