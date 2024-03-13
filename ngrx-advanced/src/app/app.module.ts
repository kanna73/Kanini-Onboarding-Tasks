;
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/components/project/project.component';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './project/store/reducers/project.reducer';
import { ProjectFacade } from './project/project.facade';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, ProjectComponent],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({ ProjectDetails: projectReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ProjectFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
