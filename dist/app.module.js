"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assets_controller_1 = require("./controllers/assets.controller");
const orders_controller_1 = require("./controllers/orders.controller");
const assets_service_1 = require("./services/assets.service");
const orders_service_1 = require("./services/orders.service");
const asset_entity_1 = require("./entities/asset.entity");
const order_entity_1 = require("./entities/order.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'nest_challenge.db',
                entities: [asset_entity_1.Asset, order_entity_1.Order],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([asset_entity_1.Asset, order_entity_1.Order]),
        ],
        controllers: [assets_controller_1.AssetController, orders_controller_1.OrderController],
        providers: [assets_service_1.AssetService, orders_service_1.OrderService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map