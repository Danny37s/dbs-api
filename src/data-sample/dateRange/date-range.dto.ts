import { Expose } from "class-transformer";

export class DateRangeDto{
    @Expose()
    dateStart: Date;
    @Expose()
    dateEnd: Date;
}