import { Pipe, PipeTransform } from '@angular/core';

import { Vehicle } from '../types/vehicle.type';
import { Run } from '../types/run.type';

@Pipe({
    name: 'vehiclesfilter'
})
/**
 * Custom vehicle pipe
 */
export class VehiclesPipe implements PipeTransform {
    /**
     * @param  {Vehicle[]} value
     * @param  {Run[]}     args
     * @return {Vehicle[]}
     */
    transform(value: Vehicle[], args: Run[]): Vehicle[] {
        return value.filter(
            vehicle => {

            }
        );
    }
}
