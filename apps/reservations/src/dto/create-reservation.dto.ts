<<<<<<< HEAD
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateChargeDto } from '@app/common';
=======
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
>>>>>>> 496605149c52120febe49bba1acbfcb5c97b97c1

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

<<<<<<< HEAD
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateChargeDto)
  charge: CreateChargeDto;
=======
  @IsString()
  @IsNotEmpty()
  placeId: string;

  @IsNotEmpty()
  invoiceId: string;
>>>>>>> 496605149c52120febe49bba1acbfcb5c97b97c1
}
