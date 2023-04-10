import { DataSampleItemDto } from './../data-sample-item/data-sample-item.dto';
import { DataSampleDto } from './data-sample.dto';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { DataSampleService } from './data-sample.service';
import { CreateDataSampleInput } from 'src/common/base.dto';

@Controller('data-sample')
export class DataSampleController {
    constructor(private readonly dataSampleService: DataSampleService){}
    
    @Post("/data")
    async createData(@Body() input: CreateDataSampleInput
    ): Promise<DataSampleDto>{
        const dataSampleDto = input.dataSampleDto
        const dataSampleItemsDto = input.dataSampleDto.dataSampleItemsDto
        return this.dataSampleService.create(dataSampleDto, dataSampleItemsDto)
    }
}
