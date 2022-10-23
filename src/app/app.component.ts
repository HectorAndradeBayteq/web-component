import { Component } from '@angular/core';
import { DiagnosticService } from 'src/services/diagnostic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-diagnostics';
  keyword = 'name';
  public diagnostics: any[] = [];
  private termToSearch = '';
  public notFound = 'No encontrado';

  constructor(private diagnosticService: DiagnosticService){}

  selectEvent(item:string) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.termToSearch = search;
    this.diagnosticService.getDiagnostics(this.termToSearch).subscribe((x:any[]) => {
      this.diagnostics = x;
    });
  }

  onFocused(e:any) {
    // do something
  }
}
