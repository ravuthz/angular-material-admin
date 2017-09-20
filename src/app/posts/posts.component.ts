import { JsonHolderService } from '../shares/services/json-holder/json-holder.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts;
    constructor(private json: JsonHolderService) { }

    ngOnInit() {
        this.loadPosts();
    }

    loadPosts() {
        this.json.getPosts().subscribe(res => this.posts = res);
    }

    likePost(i) {
        this.posts[i].liked = !this.posts[i].liked;
    }

    sharePost(i) {
        this.posts[i].shared = !this.posts[i].shared;
    }
}
