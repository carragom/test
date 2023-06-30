import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { Item } from './item'
import { ItemService } from './item.service'
import { CanExit } from '../app.component'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit, CanExit {
  item: Item

  constructor(private itemService: ItemService, private route: ActivatedRoute, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.item = this.itemService.getItem(id)
  }

  canDeactivate(): boolean {
    return false
  }

  onBackButtonTap() {
		this.routerExtensions.backToPreviousPage()
	}
}
