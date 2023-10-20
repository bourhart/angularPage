import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  banners = ["assets/bannerImages/image1.jpeg","assets/bannerImages/image2.jpeg","assets/bannerImages/image3.jpeg"];

  x = 0;
  myimage = this.banners[this.x];

  updateImage()
  {
    this.x = ((this.x == this.banners.length - 1) ? this.x + 1 : 0);
    this.myimage = this.banners[this.x];
  }
}
