import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route } from '../../types/route.type';
import { Observable } from 'rxjs';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
/**
 * Routes list component
 */
export class RoutesComponent implements OnInit {
    public routes: Route[] = [];
    public routesearch = new FormControl('');
    public filterValue: string = '';

    constructor(private _routeService: RouteService) { }

    ngOnInit() {
        this._routeService.getAll().subscribe(result => this.setRoutes(result));
        this.routesearch.valueChanges.subscribe(value => this.filterValue = value);
    }

    /**
     * Update routes array
     * @param {Route[]} routes
     */
    setRoutes(routes: Route[]): void {
        this.routes = routes;
    }
}
