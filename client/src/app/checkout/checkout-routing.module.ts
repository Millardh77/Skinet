import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent} from './checkout.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { OrderDetailedComponent } from '../orders/order-detailed/order-detailed.component';

const routes: Routes = [
  {path: '', component: CheckoutComponent},
  {path: 'success', component: CheckoutSuccessComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
