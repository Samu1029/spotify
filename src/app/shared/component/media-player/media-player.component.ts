import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://static.qobuz.com/images/covers/1a/y7/oyuuug2duy71a_600.jpg',
    name:  'Gioli & Assia',
    album: 'BB (Oficial)',
    url: 'https://localhost:4200/tracks.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo cancion........ ', response);
      }
    )

    this.listObservers$ = [observer1$];

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('💣💣💣💣💣.... BOOM!!');
  }
}
