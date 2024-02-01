import { Repository } from 'typeorm';
import { Asset } from '../entities/asset.entity';
export declare class AssetsService {
    private readonly assetRepository;
    constructor(assetRepository: Repository<Asset>);
    createAsset(assetData: any): Promise<Asset[]>;
    getAllAssets(): Promise<Asset[]>;
}
