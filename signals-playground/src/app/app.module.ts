import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UsersService } from './users.service';

export interface UsersServiceConfigInterface {
  apiUrl: string;
}

export const USERS_SERVICE_TOKEN = new InjectionToken<UsersService>('');
export const USERS_SERVICE_CONFIG_TOKEN = new InjectionToken<UsersServiceConfigInterface>(
  ''
);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: USERS_SERVICE_TOKEN, useClass: UsersService },
    {
      provide: USERS_SERVICE_CONFIG_TOKEN,
      useValue: { apiUrl: 'http://localhost:3004/users' },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
