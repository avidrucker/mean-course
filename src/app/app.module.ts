import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostCreateComponent} from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // we omit the '.ts' for imports

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
