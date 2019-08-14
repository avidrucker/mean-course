import { Component } from '@angular/core'; // component decorator must be imported

// decorator takes configuration in the form of JSON
// we use relative paths for template
// selectors allow us to use components (this will become the tag)
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
    // nothing needs to be added here
}
