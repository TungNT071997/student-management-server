import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto): Promise<void> {
    const createdStudent = new this.studentModel(createStudentDto);
    createdStudent.save();
  }
  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}
