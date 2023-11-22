import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsEmail,
  IsString,
  IsJWT,
  IsNotEmpty,
  Matches,
} from 'class-validator';
import { passwordRegex } from 'src/utils';

export class ChangePasswordDto {
  @IsInt()
  user_id: number;
  @IsEmail()
  email: string;
  @IsString()
  oldpassword: string;
  @IsString()
  newpassword: string;
}
