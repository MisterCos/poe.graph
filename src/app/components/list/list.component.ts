import { Component, OnInit } from '@angular/core';
import { PoeService } from 'src/app/shared/services/poe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private allItemList: Array<any> = [];
  private allIWeapon: Array<any> = [];
  private allArmour: Array<any> = [];
  private allJewels: Array<any> = [];


  displayDialog: boolean;

  

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private _poeService: PoeService) { }

  ngOnInit() {


    this._poeService.getAllItemData().subscribe(
      (data: any) => {
        // console.log(data)
        this.allItemList = data;
      },
      err => console.log('error'),
      () => this.filterDataInTypes(this.allItemList)

    )
  }



  filterDataInTypes(itemList: Array<any>) {

    itemList.forEach(item => {
      if (item.category === "weapon") { this.allIWeapon.push(item) }
      if (item.category === "armour") { this.allArmour.push(item) }
      if (item.category === "jewel") { this.allJewels.push(item) }

    });
    console.log(this.allIWeapon, this.allArmour);
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}


}
