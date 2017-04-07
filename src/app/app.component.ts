import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    isRoute: boolean = false;
    isEditing: boolean = false;
    isSentToDriver: boolean = false;

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: any) {
      if (this.isRoute) {
        console.log(`this is a route point ${this.tours[0].points}`);

        this.tours[0].points.push({
          lat: $event.coords.lat,
          lng: $event.coords.lng,
          draggable: true,
        })
      }
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
      });
    }

    // Create
    createNewTour() {
      this.isRoute = !this.isRoute;
      console.log(this.isRoute)
    }


    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }

    sendTourToDriver(){
      this.isSentToDriver =! this.isSentToDriver;
    }

    editMarkers() {
      this.isEditing = !this.isEditing;

    }

    // Delete
    clearMapData() {
      this.clearAllMarkers();
      this.clearAllRoutes();
    }
    clearAllMarkers() {
      this.markers = [];
    }

    clearAllRoutes() {
      this.tours[0].points = [];
    }

    deleteTourPoint(m: marker, i: number) {
      console.log(`${m} ${i}`);
      this.tours[0].points.splice(i, 1);
    }

    deleteMarker(m: marker, i: number) {
      this.markers.splice(i, 1)
    }

    // Storage
    tours: tour[] = [
      {
        name: "Tour 1",
        points: [
          {
            lat: 52.123413,
            lng: 12.123124,
            label: 'T1',
            draggable: true
          },
          {
            lat: 50.123413,
            lng: 11.123124,
            label: 'T2',
            draggable: true
          },
        ]
      }
    ]


    markers: marker[] = [
  	  {
  		  lat: 51.673858,
  		  lng: 7.815982,
  		  label: 'A',
  		  draggable: true
  	  },
  	  {
  		  lat: 51.373858,
  		  lng: 7.215982,
  		  label: 'B',
  		  draggable: false
  	  },
  	  {
  		  lat: 51.723858,
  		  lng: 7.895982,
  		  label: 'C',
  		  draggable: true
  	  }
    ]

    drivers: driver[] = [
      {
        name: "John",
        tour: this.tours[0]
      }
    ]
  }

  // just an interface for type safety.
  interface marker {
  	lat: number;
  	lng: number;
  	label?: string;
  	draggable: boolean;
  }
  interface tour {
    name?: string;
    points?: any;


    // lat: number;
  	// lng: number;
  	// label?: string;
  	// draggable: boolean;
  }

  interface driver {
    name: string;
    tour?: tour;
  }
