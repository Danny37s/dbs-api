import { DataSampleItemDto } from './../data-sample-item/data-sample-item.dto';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested, isNotEmpty } from 'class-validator';

export class DataSampleDto {
  @Expose()
  @IsNotEmpty()
  nameData: string;
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @Expose()
  @Type(() => DataSampleItemDto)
  dataSampleItemsDto: DataSampleItemDto[];
}
