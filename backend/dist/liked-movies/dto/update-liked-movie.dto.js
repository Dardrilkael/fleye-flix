"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLikedMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_liked_movie_dto_1 = require("./create-liked-movie.dto");
class UpdateLikedMovieDto extends (0, mapped_types_1.PartialType)(create_liked_movie_dto_1.CreateLikedMovieDto) {
}
exports.UpdateLikedMovieDto = UpdateLikedMovieDto;
//# sourceMappingURL=update-liked-movie.dto.js.map