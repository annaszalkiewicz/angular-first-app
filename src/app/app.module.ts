import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CockpitComponent } from './cmp-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './cmp-databinding/server-element/server-element.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { GameControlComponent } from './assignment-four/game-control/game-control.component';
import { OddComponent } from './assignment-four/game-control/odd/odd.component';
import { EvenComponent } from './assignment-four/game-control/even/even.component';
import { OnlyOddComponent } from './only-odd/only-odd.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { AssignmentFiveComponent } from './assignment-five/assignment-five.component';
import { InactiveUsersComponent } from './assignment-five/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignment-five/active-users/active-users.component';
import { AssignmentSixComponent } from './assignment-six/assignment-six.component';
import { AssignmentSevenComponent } from './assignment-seven/assignment-seven.component';
import { AssignmentEightComponent } from './assignment-eight/assignment-eight.component';
import { FilterPipe } from './assignment-eight/filter.pipe';
import { ShortenPipe } from './assignment-eight/shorten.pipe';
import { ReversePipe } from './assignment-eight/reverse.pipe';
import { SortPipe } from './assignment-eight/sort.pipe';

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
    CmpDatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    AssignmentFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    OnlyOddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AssignmentFiveComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentSixComponent,
    AssignmentSevenComponent,
    AssignmentEightComponent,
    FilterPipe,
    ShortenPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
