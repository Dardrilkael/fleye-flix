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
exports.LikedMoviesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const console_1 = require("console");
let LikedMoviesService = class LikedMoviesService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    async create(createLikedMovieDto) {
        const newMovie = new this.movieModel(createLikedMovieDto);
        return await newMovie.save();
    }
    async findAll() {
        return await this.movieModel.find().exec();
    }
    async findOne(id) {
        const movie = await this.movieModel.findById(id).exec();
        if (!movie) {
            throw new console_1.error(`Movie with ID ${id} not found`);
        }
        return movie;
    }
    update(id, updateLikedMovieDto) {
        return `This action updates a #${id} likedMovie`;
    }
    async findMovieByImdbId(imdbid) {
        try {
            let movie = await this.movieModel.findOne({ imdbID: imdbid });
            return movie;
        }
        catch (error) {
            console.error('Error fetching movie:', error);
            throw error;
        }
    }
    async removeMovieByImdbId(imdbid) {
        try {
            let movie = await this.movieModel.deleteOne({ imdbID: imdbid });
            return movie;
        }
        catch (error) {
            console.error('Error fetching movie:', error);
            throw error;
        }
    }
    async remove(id) {
        const result = await this.movieModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new console_1.error(`Movie with ID ${id} not found`);
        }
    }
};
exports.LikedMoviesService = LikedMoviesService;
exports.LikedMoviesService = LikedMoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("Movie")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LikedMoviesService);
//# sourceMappingURL=liked-movies.service.js.map