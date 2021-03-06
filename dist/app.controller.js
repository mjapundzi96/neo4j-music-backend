"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const passport_1 = require("@nestjs/passport");
const search_all_filter_dto_1 = require("./search-all-filter.dto");
const most_popular_filter_dto_1 = require("./most-popular-filter.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getBestOfPreferredGenre(request) {
        return this.appService.getBestOfPreferredGenre(request.user.id);
    }
    async getBestOfPreferredArtist(request) {
        return this.appService.getBestOfPreferredArtist(request.user.id);
    }
    async getBestOfPreferredDecade(request) {
        return this.appService.getBestOfPreferredDecade(request.user.id);
    }
    async getMostPopularSongs(mostPopularFilterDto) {
        return this.appService.getMostPopularSongs(mostPopularFilterDto);
    }
    async searchAll(searchAllFilterDto) {
        return this.appService.searchAll(searchAllFilterDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get('/bestof_preferred_genre'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBestOfPreferredGenre", null);
__decorate([
    common_1.Get('/bestof_preferred_artist'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBestOfPreferredArtist", null);
__decorate([
    common_1.Get('/bestof_preferred_decade'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBestOfPreferredDecade", null);
__decorate([
    common_1.Get('/most_popular_songs'),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [most_popular_filter_dto_1.MostPopularFilterDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getMostPopularSongs", null);
__decorate([
    common_1.Get('/search_all'),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_all_filter_dto_1.SearchAllFilterDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "searchAll", null);
AppController = __decorate([
    common_1.Controller(),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map