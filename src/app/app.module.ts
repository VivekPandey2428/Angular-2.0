import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/sever.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
