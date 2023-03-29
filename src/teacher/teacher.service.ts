import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from 'src/schemas/teacher.schema';
@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
  ) {}
  async create(createTeacherDto): Promise<void> {
    const createTeacher = new this.teacherModel(createTeacherDto);
    createTeacher.save();
  }
}
