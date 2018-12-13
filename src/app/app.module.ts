import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MainComponent,
    AboutComponent,
    AssignmentOneComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    CmpDatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
