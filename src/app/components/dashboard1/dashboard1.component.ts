import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  orders: any[] = [
    { orderNumber: '001', status: 'In Bearbeitung' },
    { orderNumber: '002', status: 'Versendet' },
    { orderNumber: '003', status: 'Abgeschlossen' }
  ];
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }
}
