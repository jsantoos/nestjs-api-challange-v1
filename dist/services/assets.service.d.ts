import { Repository } from 'typeorm';
import { Asset } from '../entities/asset.entity';
export declare class AssetService {
    private readonly assetRepository;
    constructor(assetRepository: Repository<Asset>);
    getAllAssets(): Promise<Asset[]>;
    createAsset(symbol: string): Promise<Asset>;
}
