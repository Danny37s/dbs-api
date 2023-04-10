import { DataSampleItemDto } from './../data-sample-item/data-sample-item.dto';
import { DataSampleDto } from './data-sample.dto';
import { DataSampleItemEntity } from 'src/data-sample-item/data-sample-Item.entity';
import { DataSampleEntity } from './data-sample.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import * as fs from 'fs';
import dataSample from "../../data/data.json"
@Injectable()
export class DataSampleService {
  private data: any;
  constructor(
    @InjectRepository(DataSampleEntity)
    private readonly dataSampleRepository: Repository<DataSampleEntity>,
    @InjectRepository(DataSampleItemEntity)
    private readonly dataSampleItemRepository: Repository<DataSampleItemEntity>,
  ) {
    for (const [qnh, data] of Object.entries(dataSample)) {
      for (const [id, item] of Object.entries(data)) {
        // const newData = new Data();
        // newData.qnh = qnh;
        // newData.date = new Date(item.date);
        // newData.angle_id = item.angle_id;
        // newData.status = item.status;
        // newData.predict_result = item.predict_result;
    
        // await repository.save(newData);
        console.log(`${id}`)
      }
    }
  }
  async create(
    dataSampleDto: DataSampleDto,
    dataSampleItemDto: DataSampleItemDto[],
  ): Promise<DataSampleDto> {
    
    // const dataSampleItems = await Promise.all(dataSampleItemDto.map(async (itemDto) => {
    //   const item = this.dataSampleItemRepository.create(itemDto);
    //   return item;
    // })) 
    // const dataSample = this.dataSampleRepository.create(dataSampleDto);
    // dataSample.dataSampleItemsDto = dataSampleItems
    // this.dataSampleRepository.save(dataSample)

    return plainToInstance(DataSampleDto, {}, {
      excludeExtraneousValues: true,
    });
  }
}
