import { Controller, Post, Body, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<void> {
    await this.studentService.create(createStudentDto);
  }
  @Get()
  async getAllStudents() {
    return await this.studentService.findAll();
  }
}
