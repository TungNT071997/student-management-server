import { Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  createStudent(): void {
    this.studentService.create();
  }
}
