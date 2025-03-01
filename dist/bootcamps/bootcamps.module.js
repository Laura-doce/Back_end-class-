"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootcampsModule = void 0;
const common_1 = require("@nestjs/common");
const bootcamps_service_1 = require("./bootcamps.service");
const bootcamps_controller_1 = require("./bootcamps.controller");
const bootcamp_entity_1 = require("./entities/bootcamp.entity");
const typeorm_1 = require("@nestjs/typeorm");
const course_entity_1 = require("../courses/entities/course.entity");
const review_entity_1 = require("../reviews/entities/review.entity");
let BootcampsModule = class BootcampsModule {
};
exports.BootcampsModule = BootcampsModule;
exports.BootcampsModule = BootcampsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bootcamp_entity_1.Bootcamp, course_entity_1.Course, review_entity_1.Review])],
        controllers: [bootcamps_controller_1.BootcampsController],
        providers: [bootcamps_service_1.BootcampsService],
    })
], BootcampsModule);
//# sourceMappingURL=bootcamps.module.js.map