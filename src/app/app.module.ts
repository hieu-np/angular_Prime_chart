import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerService } from 'src/services/customer.service';

import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { AppConfigService } from 'src/services/appconfigservice';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ApplicationPageComponent } from './views/application-page/application-page.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    HomePageComponent,
    ApplicationPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    ToastModule,
    TabViewModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    ButtonModule,
    DialogModule
  ],
  providers: [AppConfigService, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
