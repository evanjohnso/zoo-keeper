import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bannerTitle = "Welcome to zTAS";
  bannerSubTitle = "Zoo Tracking As a Service";
  bannerMessage = "Here at zTAS, our digital platform empowers zookeepers with the tools necessary to avoid tomorrows paperwork";
}
