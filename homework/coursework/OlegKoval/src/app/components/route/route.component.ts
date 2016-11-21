import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouteService } from '../../services/route.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Stop } from '../../types/stop.type';
import { RouteProp } from '../../types/routeProp.type';
import { Vehicle } from '../../types/vehicle.type';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
  providers: []
})
/**
 * Specific route component
 */
export class RouteComponent implements OnInit {
    public gmapCenterLat:number = 34.052235;
    public gmapCenterLng:number = -118.243683;
    public gmapZoom:number = 11;
    public vehicles: Vehicle[] = [];
    public stops: Stop[] = [];
    public routeProp: RouteProp = {
        id: '',
        display_name: '',
        bg_color: '#f75d00',
        fg_color: '#000000'
    };

    private _id: number = 0;

    constructor(private _routeService: RouteService, private _router: ActivatedRoute) { }

    /**
     * Init specific route and get route info
     */
    ngOnInit() {
        this._id = +this._router.snapshot.params['id'];
        this.runServices(this._id);
    }

    /**
     * Run services to get route info
     * @param {number} id
     */
    runServices(id:number) {
        this._routeService.getRouteStops(id).subscribe(stops => this.setStops(stops));
        this._routeService.getRouteInfo(id).subscribe(routeProp => this.setRouteProp(routeProp));
        this._routeService.getRouteVehicles(id).subscribe(vehicles => this.setVehicles(vehicles));
    }

    /**
     * Update route stops
     * @param {Stop[]} stops
     */
    setStops(stops: Stop[]): void {
        this.stops = stops;
        this.recenterMap(this.stops[0]);
    }

    /**
     * Update route properties
     * @param {RouteProp} routeProp
     */
    setRouteProp(routeProp: RouteProp): void {
        this.routeProp = routeProp;
    }

    /**
     * Update route vehicles list with position + execute it in loop
     * @param {Vehicle[]} vehicles
     */
    setVehicles(vehicles: Vehicle[]): void {
        let self = this;
        this.vehicles = vehicles;
        setTimeout(function() {self._routeService.getRouteVehicles(self._id).subscribe(vehicles => self.setVehicles(vehicles))}, 5000);
    }

    /**
     * Re-center map by first stop coordinate
     * @param {Stop} stop
     */
    recenterMap(stop: Stop): void {
        this.gmapCenterLat = stop.latitude;
        this.gmapCenterLng = stop.longitude;
    }
}
