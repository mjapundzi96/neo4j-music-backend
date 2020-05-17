"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const genres_controller_1 = require("./genres.controller");
const genres_service_1 = require("./genres.service");
const neo4j_config_1 = require("../config/neo4j.config");
let GenresModule = class GenresModule {
};
GenresModule = __decorate([
    common_1.Module({
        controllers: [genres_controller_1.GenresController],
        providers: [genres_service_1.GenresService, neo4j_config_1.neo4jProvider]
    })
], GenresModule);
exports.GenresModule = GenresModule;
//# sourceMappingURL=genres.module.js.map