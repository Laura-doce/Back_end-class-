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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const bootcamp_entity_1 = require("../../bootcamps/entities/bootcamp.entity");
const typeorm_1 = require("typeorm");
const minimun_skill_enum_1 = require("../enum/minimun.skill.enum");
let Course = class Course {
};
exports.Course = Course;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text"
    }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Course.prototype, "weeks", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: [
            "beginner",
            "intermediate",
            "advanced"
        ]
    }),
    __metadata("design:type", Number)
], Course.prototype, "minimumSkill", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at'
    }),
    __metadata("design:type", Number)
], Course.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bootcamp_entity_1.Bootcamp, (bootcamp) => bootcamp.courses),
    __metadata("design:type", bootcamp_entity_1.Bootcamp)
], Course.prototype, "bootcamp", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)('courses')
], Course);
//# sourceMappingURL=course.entity.js.map