import { Controller, Post, Body } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-TeacherDto';
import { TeacherService } from './teacher.service';

@Controller('/teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Post()
  async createTeacher(
    @Body() createTeacherDto: CreateTeacherDto,
  ): Promise<void> {
    await this.teacherService.create(createTeacherDto);
  }
}
