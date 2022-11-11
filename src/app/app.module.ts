import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';
// import { ProductService } from './products/product.service';

@NgModule({
  declarations: [   //here we define which components belong to this module
    AppComponent,
    // ProductListComponent,
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [        //here we define the external modules that we want to have available in angular. 
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule   
  ],
  // providers: [ProductGuardService],
  bootstrap: [AppComponent],  //defines the startup component of the application which in our case is the AppComponent
     
})

export class AppModule { }
