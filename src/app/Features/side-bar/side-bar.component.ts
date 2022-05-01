import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() line1: string = 'Emilio';
  @Input() line2: string = 'Grano';
  @Input() source: string = 'https://source.unsplash.com/c_GmwfHBDzk/200x200';

  constructor() {}

  ngOnInit(): void {}
}
