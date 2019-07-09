import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
SearchName:string="";

  constructor(private response: ServerService) {}
a:Array<any>
  ngOnInit() {
  }
  search()
  {
   this.response.getServer(this.SearchName).subscribe((response)=>{
     this.a=response.results.artistmatches.artist;
     console.log(this.a);
   }
   );
  }
}