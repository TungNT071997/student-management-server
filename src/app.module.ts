import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { cors } from 'cors';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
