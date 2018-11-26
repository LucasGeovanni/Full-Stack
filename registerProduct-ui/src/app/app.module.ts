import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";

import { AppComponent } from './app.component';
import { ControlComponent } from './components/control/control.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

import { RequestService } from './services/request.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/model.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    FormComponent,
    TableComponent,
    ModalComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    NgbModalModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
