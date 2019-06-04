import { Component, OnInit, Input } from '@angular/core';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postlists: Post[];

  constructor() { }

  ngOnInit() {
  }
}
