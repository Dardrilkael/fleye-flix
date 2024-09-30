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
exports.LikedMoviesController = void 0;
const common_1 = require("@nestjs/common");
const liked_movies_service_1 = require("./liked-movies.service");
const create_liked_movie_dto_1 = require("./dto/create-liked-movie.dto");
const update_liked_movie_dto_1 = require("./dto/update-liked-movie.dto");
let LikedMoviesController = class LikedMoviesController {
    constructor(likedMoviesService) {
        this.likedMoviesService = likedMoviesService;
    }
    create(createLikedMovieDto) {
        return this.likedMoviesService.create(createLikedMovieDto);
    }
    findAll() {
        return this.likedMoviesService.findAll();
    }
    async getMovieByImdbId(imdbID) {
        const movie = await this.likedMoviesService.findMovieByImdbId(imdbID);
        return movie;
    }
    findOne(id) {
        return this.likedMoviesService.findOne(id);
    }
    update(id, updateLikedMovieDto) {
        return this.likedMoviesService.update(id, updateLikedMovieDto);
    }
    async removeMovieByImdbId(imdbID) {
        await this.likedMoviesService.removeMovieByImdbId(imdbID);
    }
    async remove(id) {
        return await this.likedMoviesService.remove(id);
    }
};
exports.LikedMoviesController = LikedMoviesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_liked_movie_dto_1.CreateLikedMovieDto]),
    __metadata("design:returntype", void 0)
], LikedMoviesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LikedMoviesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('by-imdbid'),
    __param(0, (0, common_1.Query)('imdbid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikedMoviesController.prototype, "getMovieByImdbId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LikedMoviesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_liked_movie_dto_1.UpdateLikedMovieDto]),
    __metadata("design:returntype", void 0)
], LikedMoviesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('by-imdbid'),
    __param(0, (0, common_1.Query)('imdbid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikedMoviesController.prototype, "removeMovieByImdbId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikedMoviesController.prototype, "remove", null);
exports.LikedMoviesController = LikedMoviesController = __decorate([
    (0, common_1.Controller)('liked-movies'),
    __metadata("design:paramtypes", [liked_movies_service_1.LikedMoviesService])
], LikedMoviesController);
//# sourceMappingURL=liked-movies.controller.js.map