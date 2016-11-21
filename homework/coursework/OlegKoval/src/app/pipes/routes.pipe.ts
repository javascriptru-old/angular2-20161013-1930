import { Pipe, PipeTransform } from '@angular/core';
import { Route } from '../types/route.type';

@Pipe({
    name: 'routesfilter'
})
/**
 * Custom route pipe for filtering
 */
export class RoutesPipe implements PipeTransform {
    /**
     * @param  {Route[]} value
     * @param  {string}  searchValue
     * @return {Route[]}
     */
    transform(value: Route[], searchValue: string): Route[] {
        return value.filter(
            route => (route.display_name.toLowerCase().includes(searchValue.toLowerCase()) || searchValue.length === 0 ) ? route : null
        );
    }
}
