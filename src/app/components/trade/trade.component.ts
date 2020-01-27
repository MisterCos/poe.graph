import { Component, OnInit } from '@angular/core';
import { PoeService } from 'src/app/shared/services/poe.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  poeNextId: string;
  listItems: Array<any> = [];
  constructor(private _poe: PoeService) { }

  ngOnInit() {
    
      this._poe.getNextChangeId().subscribe(
        (data: any) => this.poeNextId = data.next_change_id,
        err => console.log('error'),
        () => {
          this._poe.getPublicStash(this.poeNextId).subscribe(
            (data: any) => {
              console.log(data)
              this.filtrarArray(data.stashes)
            }
          )
        }
      )
    

  }


  /**
   * Codigo que agrupa el array por 
   * @param array 
   */
  filtrarArray(array) {
    let arrayTransformada: Array<any> = []
    let arrayFiltrada = array.filter(item => item.public === true && item.league === "Metamorph");
    arrayFiltrada.forEach(element => {
      const obj = {
        accountName: element.accountName,
        stash: element.stash,
        items: element.items
      }
      arrayTransformada.push(obj)
    });
    console.log(arrayTransformada);
    arrayTransformada = arrayTransformada.reduce((prev, current, index, arr) => {
      let exists = prev.find(x => x.accountName === current.accountName);
      if (!exists) {
        exists = { accountName: current.accountName, stash: [], items: [] };
        prev.push(exists);
      }
      if (current.items != null) {
        exists.stash.push(current.stash)
        exists.items.push(current.items);

      }
      return prev;

    }, [])
   
    this.listItems.push(arrayTransformada);
    console.log('items unos tras otros',this.listItems)
  }


}
