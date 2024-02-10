import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

interface Row {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent {
  order = {
    companyName: '',
    orderNumber: '',
    deliveryAddress: ''
  };


  rows: Row[] = [{ text1: '', text2: '', text3: '', text4: '' }];

  addRow() {
    this.rows.push({ text1: '', text2: '', text3: '', text4: '' });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }
  constructor(public authService: AuthService) {}
  showForm: boolean = false;

  showNewOrderForm() {
    this.showForm = true;
  }
}
