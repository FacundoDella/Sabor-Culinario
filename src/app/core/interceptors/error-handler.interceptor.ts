import { HttpInterceptorFn , HttpErrorResponse} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Si es un error del cliente:
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Si es un error del servidor:
      errorMessage = `Error code: ${error.status}, message: ${error.message}`;
    }

    return throwError(() => errorMessage);
  }));;
};
