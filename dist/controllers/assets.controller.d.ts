import { AssetsService } from '../services/assets.service';
import { Asset } from '../entities/asset.entity';
export declare class AssetController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    create(assetData: any): Promise<Asset[]>;
    getAll(): Promise<Asset[]>;
}
