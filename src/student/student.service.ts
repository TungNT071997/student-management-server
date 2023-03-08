import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(): Promise<void> {
    const createdStudent = new this.studentModel({
      firstName: 'Tung',
      lastName: 'Nguyen',
      age: '20',
      dateOfBirth: '20/01/1997',
    });
    createdStudent.save();
  }
}
