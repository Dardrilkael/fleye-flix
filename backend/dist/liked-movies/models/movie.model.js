"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = void 0;
const mongoose_1 = require("mongoose");
const movie_schema_1 = require("../schemas/movie.schema");
exports.MovieModel = (0, mongoose_1.model)('Movie', movie_schema_1.MovieSchema);
//# sourceMappingURL=movie.model.js.map