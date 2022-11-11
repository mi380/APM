// import { Component } from '@angular/core';
// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  //directly defining template in component's metadata
  template: `<div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li>
          <a class="nav-link" routerLink="/welcome">Home</a>
          <!-- <a class="nav-link" routerLinkActive="active" routerLink="/welcome">Home</a> -->
        </li>
        <li>
          <a class="nav-link" routerLink="/products">Product List</a>
          <!-- <a class="nav-link" routerLinkActive="active" routerLink="/products">Product List</a> -->
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>`,

  // providers: [ProductService],
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
