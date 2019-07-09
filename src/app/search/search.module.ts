import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServerService } from '../server.service';
import { MatToolbarModule} from '@angular/material';
import { MatButtonModule } from '@angular'

const material = [ MatToolbarModule];


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    material
  
  ],
  bootstrap: [SearchComponent],
  exports:[SearchComponent,material],
  providers:[ServerService]
})


export class SearchModule { }
