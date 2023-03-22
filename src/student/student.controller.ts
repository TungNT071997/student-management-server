import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

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

  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    return await this.studentService.findStudentById(id);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    await this.studentService.delete(id);
  }
  @Patch(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return await this.studentService.update(id, updateStudentDto);
  }
}
