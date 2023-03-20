import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nguyenthanhtung21797:Tung1997@tungcluster.rylmh8t.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'student-management' },
    ),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
