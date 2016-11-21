export interface Vehicle {
    id: string,
    run_id: string,
    route_id: string,
    heading: number,
    predictable: boolean,
    seconds_since_report: number,
    longitude: number,
    latitude: number
}