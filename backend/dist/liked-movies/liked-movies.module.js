"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikedMoviesModule = void 0;
const common_1 = require("@nestjs/common");
const liked_movies_service_1 = require("./liked-movies.service");
const liked_movies_controller_1 = require("./liked-movies.controller");
const mongoose_1 = require("@nestjs/mongoose");
const movie_schema_1 = require("./schemas/movie.schema");
let LikedMoviesModule = class LikedMoviesModule {
};
exports.LikedMoviesModule = LikedMoviesModule;
exports.LikedMoviesModule = LikedMoviesModule = __decorate([
    (0, common_1.Module)({
        controllers: [liked_movies_controller_1.LikedMoviesController],
        providers: [liked_movies_service_1.LikedMoviesService],
        imports: [mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL),
            mongoose_1.MongooseModule.forFeature([{ name: 'Movie', schema: movie_schema_1.MovieSchema }]),
        ],
    })
], LikedMoviesModule);
//# sourceMappingURL=liked-movies.module.js.map