"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MovieSchema = new mongoose_1.Schema({
    Title: { type: String, required: true },
    Year: { type: String, required: true },
    imdbID: { type: String, required: true },
    Type: { type: String, required: true },
    Poster: { type: String, required: true },
});
//# sourceMappingURL=movie.schema.js.map