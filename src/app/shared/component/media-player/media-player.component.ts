import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent {

  mockCover: TrackModel = {
    cover: 'https://static.qobuz.com/images/covers/1a/y7/oyuuug2duy71a_600.jpg',
    name:  'Gioli & Assia',
    album: 'BB (Oficial)',
    url: 'https://localhost:4200/tracks.mp3',
    _id: 1
  }
}
