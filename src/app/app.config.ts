import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { SharedService } from './core/services/shared-service';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([errorHandlerInterceptor])), SharedService]
};
