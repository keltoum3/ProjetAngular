export class Trajet {
    id?: string;
    departure?: string;
    arrival?: string;
    date?: string;

    constructor(id: string, departure: string, arrival: string, date: string){
        this.id = id;
        this.departure = departure;
        this.arrival = arrival;
        this.date = date;
    }
}
