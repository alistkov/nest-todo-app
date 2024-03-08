import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsBoolean()
  readonly completed: boolean;

  @IsOptional()
  @IsDate()
  readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  readonly updatedAt: Date | null;
}
