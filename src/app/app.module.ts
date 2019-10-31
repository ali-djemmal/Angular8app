import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SkilsComponent } from './skils/skils.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddSilsComponent } from './add-sils/add-sils.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskilsComponent } from './myskils/myskils.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DetaillsComponent } from './detaills/detaills.component';
const appRoutes: Routes = [
  { path: '' , component:HomeComponent  } ,
  { path: 'home', component:HomeComponent  },
  { path: 'skils', component:SkilsComponent  }
  ,{ path: 'addskils', component:AddSilsComponent  }
  ,{ path: 'login', component:LoginComponent  },
  { path: 'register', component:RegisterComponent  }
  ,{ path: 'skils', component:SkilsComponent  },
  { path: 'myskils', component:MyskilsComponent  }
  ,
  { path: 'detaills/:id', component:DetaillsComponent  }



];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SkilsComponent,HomeComponent, AddSilsComponent, LoginComponent, RegisterComponent, MyskilsComponent, DetaillsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),FormsModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule ,// imports firebase/storage only needed for storage features
    AngularFireDatabaseModule 

    // other imports here
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
