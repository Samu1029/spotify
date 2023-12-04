import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  try {
    const token: boolean = cookieService.check('token');
    if (token) {
      console.log('Todo ok? 🆗🆗')
      return true;
    } else {
      console.log('Algo sucedio? ❌❌')
      router.navigate(['/', 'auth']);
      return false;
    }
    
  } catch (e) {
    console.log('Algo sucedio? ⚠️⚠️')
    return false;
  }
};
