"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
let MoviesService = class MoviesService {
    create(createMovieDto) {
        return 'This action adds a new movie';
    }
    findAll() {
        return `This action returns all movies`;
    }
    async findOne(movieName) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=925eba28&s=${movieName}`);
            if (!response.ok)
                throw new Error(`Error fetching data: ${response.statusText}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to fetch movie data');
        }
    }
    update(id, updateMovieDto) {
        return `This action updates a #${id} movie`;
    }
    remove(id) {
        return `This action removes a #${id} movie`;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)()
], MoviesService);
//# sourceMappingURL=movies.service.js.map