import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  postlists = [
    { 
	  title: 'Mon premier post',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quo, exercitationem, officiis ducimus harum similique porro in eveniet vitae ipsum totam, fuga aliquam! Deserunt sapiente perspiciatis voluptatibus repellat ullam velit.',
	  loveIts: 0,
	  created_at: Date.now()
    },
    {
      title: 'Mon deuxième post',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio animi eius sapiente dolor ducimus. Eius rerum enim earum odio molestiae officia! Sapiente eligendi atque dolorum et ipsa perspiciatis, tempora.',
	  loveIts: 0,
	  created_at: Date.now()
    },
    {
      title: 'Encore un post',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorum veniam beatae sunt est nobis nam, at ratione alias, sequi modi rem esse aliquam id quibusdam quod perspiciatis consequuntur labore.',
	  loveIts: 0,
	  created_at: Date.now()
    }
  ];
}
