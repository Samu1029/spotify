import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of} from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // private readonly URL = environment.api;  --esto para trabajar en un ambiente local 
  private readonly URL = 'http://localhost:3001/api/1.0';

  constructor(private httpClient: HttpClient) {  
  }


  /**
   * 
   * @returns Devolver todas las canciones! molonas! 🤘🤘
   */

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
   * //TODO {data:[..1,...2,..2]}
   * 
   * @returns 
   */
  
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }

  /**
   * 
   * @returns Devolver canciones Random
   */
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        tap(data => console.log('💣💣💣 ', data)),
        mergeMap(({ data }: any) => this.skipById(data, 1)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          console.log('Algo paso revisame 🆗⚠️⚠️ ', [status, statusText])
          return of([])
        })
      )
  }
}
