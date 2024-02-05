import { AssetService } from '../services/assets.service';
import { Asset } from '../entities/asset.entity';
export declare class AssetController {
    private readonly assetService;
    constructor(assetService: AssetService);
    findAll(): Promise<Asset[]>;
    create(assetData: {
        symbol: string;
    }): Promise<Asset>;
}
