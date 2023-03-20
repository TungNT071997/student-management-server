import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { UpdateStudentDto } from './dto/update-student.dto';

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
  async delete(id: string): Promise<void> {
    await this.studentModel.findByIdAndDelete(id);
  }
  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<UpdateStudentDto> {
    return await this.studentModel.findByIdAndUpdate(
      id, // ID of the document you want to update
      updateStudentDto,
      { new: true },
    );
  }
}
