import { Component, Input } from '@angular/core';
import { DiagnosticService } from 'src/services/diagnostic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() url: string = 'http://localhost:32255/Hospitalization/DiagnosticsByTerm';
  title = 'input-diagnostics';
  keyword = 'name';
  public diagnostics: any[] = [];
  private termToSearch = '';
  public notFound = 'No encontrado';
  public isLoading = false;
  private lastKeyPressTimer: any;
  public ctx = {notFound: ''};

  constructor(private diagnosticService: DiagnosticService){}

  selectEvent(item:string) {
    alert(item);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.termToSearch = search;
    if(search.length >= 3){ 
      this.notFound= this.isLoading ? "Buscando...":"No encontrado";
      this.triggerSearch(); } 
    else { this.notFound="De ingresar al menos 3 caracteres"; this.ctx.notFound = this.notFound; this.diagnostics = [];}
  }

  onFocused(e:any) {}

  triggerSearch(){
    if(this.lastKeyPressTimer)clearTimeout(this.lastKeyPressTimer);
    this.lastKeyPressTimer = setTimeout(() => {this.search();},1000);
  }

  search(){

    this.diagnostics = [];
    
    if(this.termToSearch.length >= 3){
      this.isLoading = true;
      this.diagnosticService.getDiagnostics(this.url, this.termToSearch)
      .subscribe({
        next: (x:any[]) => {
          this.diagnostics = x.map(term => { return { id: Math.random()*100, name: term }});
          this.isLoading = false;
        },
        error:() => { this.isLoading = false; }
      });
    }
  }

  customFilter(items: any[]): any[]{ return items;  }

}
