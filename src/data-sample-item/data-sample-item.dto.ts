import { Expose } from "class-transformer";
import { IsEnum, IsNotEmpty } from "class-validator";

export enum E_status {
    "ok"="ok",
    "fail" = "fail"
}
export class DataSampleItemDto{
    @Expose()
    @IsNotEmpty()
    name:string;
    @Expose()
    @IsNotEmpty()
    date:Date;
    @Expose()
    @IsNotEmpty()
    angle_id: number;
    @Expose()
    @IsNotEmpty()
    @IsEnum(E_status)
    status: "ok";
    @Expose()
    @IsNotEmpty()
    predict_result:number[]
}