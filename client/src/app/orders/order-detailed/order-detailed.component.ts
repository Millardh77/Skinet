import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute,
              private bcService: BreadcrumbService) {
        this.bcService.set('@orderDetailed', '');
     }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.ordersService.getOrder(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(order => {
      this.order = order;
      this.bcService.set('@orderDetailed',  `Order# ${order.id} - ${order.status}`)
    }, error => {
      console.log(error);
    });
  }

}
