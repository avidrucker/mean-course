import { Component } from '@angular/core'; // component decorator must be imported

// decorator takes configuration in the form of JSON
// we use relative paths for template
// selectors allow us to use components (this will become the tag)
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue; // console.dir(postInput); // to inspect
  }
}
