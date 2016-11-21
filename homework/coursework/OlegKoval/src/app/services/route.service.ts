import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Route } from '../types/route.type';
import { Stop } from '../types/stop.type';
import { RouteProp } from '../types/routeProp.type';
import { Vehicle } from '../types/vehicle.type';

@Injectable()
/**
 * Route service
 */
export class RouteService {
    private _urlAll: string = 'http://api.metro.net/agencies/lametro/routes/';

    /**
     * @param {Http} private _http
     */
    constructor(private _http:Http) { }

    /**
     * Get all routes
     * @return {Observable<Route[]>}
     */
    getAll(): Observable<Route[]> {
        return this._http.get(this._urlAll)
        .map(result => result.json().items);
    }

    /**
     * Get specific route info
     * @param  {number}                id
     * @return {Observable<RouteProp>}
     */
    getRouteInfo(id:number): Observable<RouteProp> {
        return this._http.get(this._urlAll + id.toString())
        .map(result => result.json());
    }

    /**
     * Get specific route stops in sequence
     * @param  {number}             id
     * @return {Observable<Stop[]>}
     */
    getRouteStops(id:number): Observable<Stop[]> {
        return this._http.get(this._urlAll + id.toString() + '/sequence')
        .map(result => result.json().items);
    }

    /**
     * Get all vehicles on specific route (includes current positon for each vehicle)
     * @param  {number}                id
     * @return {Observable<Vehicle[]>}
     */
    getRouteVehicles(id:number): Observable<Vehicle[]> {
        return this._http.get(this._urlAll + id.toString() + '/vehicles')
        .map(result => result.json().items);
    }
}
