import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer, Representative } from 'src/models/customer.interface';
import { CustomerService } from 'src/services/customer.service';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  //customer var
  customers: Customer[] = [];
  customerSubscription!: Subscription;

  //table var

  representatives: Representative[] = [];
  statuses: any[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  // lifecycle
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerSubscription = this.customerService
      .getCustomerAll()
      .subscribe((data: Customer[]) => {
        this.customers = data;
        this.loading = false;
        this.customers.forEach((customer: any) => {
          customer.date = new Date(customer.date);
        });
      });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  ngOnDestroy(): void {
    if (this.customerSubscription) {
      this.customerSubscription.unsubscribe();
    }
  }

  clear(table: Table) {
    table.clear();
  }

  //table
}
