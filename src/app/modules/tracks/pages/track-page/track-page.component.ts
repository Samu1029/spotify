import { Component } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent {

  mockTracksList: Array<TrackModel> = [
  ]

  ngOnInit(): any {
    const { data }:  any = (dataRaw as any).default;
    this.mockTracksList = data;
  }
}
