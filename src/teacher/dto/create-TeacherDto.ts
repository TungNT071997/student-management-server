import { IsNotEmpty, IsString, IsEmail, IsDateString } from 'class-validator'

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsDateString()
  readonly dateOfBirth: Date;

  @IsEmail()
  readonly email: string;
}
