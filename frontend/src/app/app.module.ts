import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DocumentItemComponent } from './document-item/document-item.component';
import { ViewDocumentModalComponent } from './view-document-modal/view-document-modal.component';
import { LoadDocumentModalComponent } from './load-document-modal/load-document-modal.component';
import { StoreModule } from '@ngrx/store';
import { docsReducer } from 'src/state/docsState/docs.reducers';
import { AskReviewModalComponent } from './ask-review-modal/ask-review-modal.component';
import { CommentPdfModalComponent } from './comment-pdf-modal/comment-pdf-modal.component';
import { PdfLogHistoryModalComponent } from './pdf-log-history-modal/pdf-log-history-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    DocumentItemComponent,
    ViewDocumentModalComponent,
    LoadDocumentModalComponent,
    AskReviewModalComponent,
    CommentPdfModalComponent,
    PdfLogHistoryModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    StoreModule.forRoot({ docs: docsReducer }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
