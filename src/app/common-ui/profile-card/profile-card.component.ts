import {Component, Input} from '@angular/core';
import {Profile} from "../../data/interfaces/profile.interface";
// import {TrackedIncrementalBuildStrategy} from "@angular/compiler-cli/src/ngtsc/incremental";
import {ImgUrlPipe} from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
  // protected readonly TrackedIncrementalBuildStrategy = TrackedIncrementalBuildStrategy;
}
