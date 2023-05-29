import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer } from './store/products/product.reducer';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/products/product.effects';
import { ProductService } from './services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductSkeletonComponent } from './components/home/product-skeleton/product-skeleton.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsCategoryComponent } from './pages/products-category/products-category.component';
import { ProductDetailsSkeletonComponent } from './components/home/product-details-skeleton/product-details-skeleton.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LayoutComponent,
    ProductCardComponent,
    ProductComponent,
    CheckoutComponent,
    ProductSkeletonComponent,
    NavbarComponent,
    ProductsCategoryComponent,
    ProductDetailsSkeletonComponent,
    CartPageComponent,
    FavoritePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreModule.forRoot(
      {
        products: productReducer,
      },
      {}
    ),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ProductEffects]),
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatToolbarModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
