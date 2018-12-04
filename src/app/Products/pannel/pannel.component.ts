import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {
  @Output() SearchClick = new EventEmitter();
  @Output() SortClick = new EventEmitter();
  private searchTerms = new Subject<string>();
  constructor() { }
  Items$: Observable<any>;

  ngOnInit() {
  
    this.Items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
     // switchMap((term: string) => this.ClickMe(term)),
    );
  }
  
  Search(term) {
    this.SearchClick.emit(term);
  }
  Sort(term) {
    
    this.SortClick.emit(term);
  }
}
