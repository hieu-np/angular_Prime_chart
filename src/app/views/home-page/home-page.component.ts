import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class HomePageComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public router: Router
  ) {}

  ngOnInit(): void {}
  delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  
  confirm(event: Event, msg: string) {

    this.confirmationService.confirm({
      target: event.target!,
      message: `Mở ứng dụng ${msg} ?`,
      icon: 'pi pi-question-circle',
      acceptLabel: 'Có',
      rejectLabel: 'Không',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      accept: () => {
        this.messageService.add({
          severity: `info`,
          summary: `Đang mở dụng`,
          detail: `Bạn đồng ý mở ứng dụng ${msg}`,
          icon: 'pi pi-spin pi-spinner'
        });
        this.delay(1000).then(() => {
          this.router.navigate([`application/${msg}`]);
        });
      },

      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Từ chối',
          detail: 'Bạn từ chối mở ứng dụng',
        });
      },
    });
  }
}
