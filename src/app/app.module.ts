import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeListEffects } from './components/jokes-list/effects/joke-list.effects';
import { JokesListComponent } from './components/jokes-list/jokes-list.component';
import { jokeListReducer } from './components/jokes-list/reducer/joke-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    JokesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ jokes: jokeListReducer }),
    EffectsModule.forRoot([JokeListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
