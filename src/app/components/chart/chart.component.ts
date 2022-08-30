import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartDemo } from 'src/models/chartdemo.interface';
import { ChartDemoService } from 'src/services/chartsdemonservice';

import { AppConfig } from 'src/models/appconfig';
import { AppConfigService } from 'src/services/appconfigservice';

import {rippleffect} from 'src/assets/js/ripple';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  
  data: any;

  chartOptions: any;

  subscription!: Subscription;

  subscriptionChart!: Subscription;

  config!: AppConfig;

  chart: ChartDemo = {
    id: 0,
    lineLabel: '',
    barLabel: '',
    labels: [],
    dataline: [],
    databar: [],
    colorGreen: '',
    backgroundColorGreen: '',
    colorBlue: '',
    backgroundColorBlue: '',
    colorRed: '',
    backgroundColorRed: '',
  };

  generateLabel: number = 20;
  generateMin: number = 0;
  generateMax: number = 100;

  constructor(
    private configService: AppConfigService,
    public chartDemoService: ChartDemoService,
    private elementRef: ElementRef, 
    private renderer2: Renderer2
  ) {}
  ngAfterViewInit() {
    rippleffect(this.elementRef, this.renderer2);
  }
  ngOnInit() {
    this.subscriptionChart = this.chartDemoService
      .getAllCharts()
      .subscribe((chartsData: ChartDemo[]) => {
        this.chart = chartsData[0];
        this.data = {
          labels: this.chart.labels,
          datasets: [
            {
              type: 'line',
              label: this.chart.lineLabel,
              borderColor: this.chart.colorGreen,
              borderWidth: 2,
              fill: false,
              data: this.chart.dataline,
              tension: 0.3,
              cubicInterpolationMode: 'monotone',
            },
            {
              type: 'bar',
              label: this.chart.barLabel,
              backgroundColor: this.chart.backgroundColorBlue,
              data: this.chart.databar,
              borderColor: this.chart.colorBlue,
              borderWidth: 2,
              borderRadius: 100,
            },
          ],
        };

      });

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
      // scales: {
      //   y: { // defining min and max so hiding the dataset does not change scale range
      //     min: 0,
      //     max: 100
      //   }
      // }
    };
    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
      this.config = config;
      this.updateChartOptions();
    });
  }

  generateRandom(length: number, min: number, max: number) {
    return Array.from({ length: length }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }

  generateArray(length: number) {
    return Array.from(Array(length).keys());
  }

  generateArrayOne(length: number) {
    return Array.from({ length: length }, (_, i) => i + 1);
  }

  randomColor(status: string) {
    let color = [
      '#EE4D2E',
      '#0d6efd',
      '#198754',
      '#dc3545',
      '#ffc107',
      '#0dcaf0',
      '#6610f2',
      '#6f42c1',
      '#d63384',
      '#fd7e14',
      '#20c997',
      '#4285F4',
      '#EA4335',
      '#FBBC05',
      '#34A853',
      '#00A1F1',
      '#F65314',
      '#FFBB00',
      '#7CBB00',
      '#EE4D2E',
      '#0d6efd',
      '#198754',
      '#dc3545',
      '#ffc107',
      '#0dcaf0',
      '#6610f2',
      '#6f42c1',
      '#d63384',
      '#fd7e14',
      '#20c997',
      '#4285F4',
      '#EA4335',
      '#FBBC05',
      '#34A853',
      '#00A1F1',
      '#F65314',
      '#FFBB00',
      '#7CBB00',
    ];
    let colorBg = [
      '#EE4D2E33',
      '#0d6efd33',
      '#19875433',
      '#dc354533',
      '#ffc10733',
      '#0dcaf033',
      '#6610f233',
      '#6f42c133',
      '#d6338433',
      '#fd7e1433',
      '#20c99733',
      '#4285F433',
      '#EA433533',
      '#FBBC0533',
      '#34A85333',
      '#00A1F133',
      '#F6531433',
      '#FFBB0033',
      '#7CBB0033',
      '#EE4D2E33',
      '#0d6efd33',
      '#19875433',
      '#dc354533',
      '#ffc10733',
      '#0dcaf033',
      '#6610f233',
      '#6f42c133',
      '#d6338433',
      '#fd7e1433',
      '#20c99733',
      '#4285F433',
      '#EA433533',
      '#FBBC0533',
      '#34A85333',
      '#00A1F133',
      '#F6531433',
      '#FFBB0033',
      '#7CBB0033',
    ];
    let index = this.data.datasets.length;
    let t = index % color.length
    return status == 'border' ? color[t] : colorBg[t];
  }

  addTenData() {
    this.generateLabel += 10;
    this.updateData();
    
  }
  deleteTenData() {
    this.generateLabel -= 10;
    this.updateData();
  }

  resetData() {
    this.generateLabel = 20;
    this.data = {
      labels: this.chart.labels,
      datasets: [
        {
          type: 'line',
          label: this.chart.lineLabel,
          borderColor: this.chart.colorGreen,
          borderWidth: 2,
          fill: false,
          data: this.chart.dataline,
          tension: 0.3,
          cubicInterpolationMode: 'monotone',
        },
        {
          type: 'bar',
          label: this.chart.barLabel,
          backgroundColor: this.chart.backgroundColorBlue,
          data: this.chart.databar,
          borderColor: this.chart.colorBlue,
          borderWidth: 2,
          borderRadius: 100,
        },
      ],
    };
    
  }

  adDataSheetLine() {
    let temp = { ...this.data };
    temp.datasets.push({
      type: 'line',
      label: this.chart.lineLabel,
      borderColor: this.randomColor('border'),
      borderWidth: 2,
      fill: false,
      data: this.chart.dataline,
      tension: 0.3,
      cubicInterpolationMode: 'monotone',
    });
    let line = this.generateRandom(
      this.generateLabel,
      this.generateMin,
      this.generateMax
    );
    let index = temp.datasets.length;
    temp.datasets[index-1].data = line;
    this.data = temp
  }

  adDataSheetBar() {
    let temp = { ...this.data };
    temp.datasets.push({
      type: 'bar',
      label: this.chart.barLabel,
      backgroundColor: this.randomColor('bg'),
      data: this.chart.databar,
      borderColor: this.randomColor('border'),
      borderWidth: 2,
      borderRadius: 100,
    });
    let bar = this.generateRandom(
      this.generateLabel,
      this.generateMin,
      this.generateMax
    );
    let index = temp.datasets.length;
    temp.datasets[index-1].data = bar;
    this.data = temp
  }

  updateData() {
    let datalabels = { ...this.data };

    datalabels.datasets.map((res: any) => {
      let labels = this.generateArrayOne(this.generateLabel);

      datalabels.labels = labels;

      if (res.type == 'bar') {
        let bar = this.generateRandom(
          this.generateLabel,
          this.generateMin,
          this.generateMax
        );
        res.data = bar;
      } else if (res.type == 'line') {
        let line = this.generateRandom(
          this.generateLabel,
          this.generateMin,
          this.generateMax
        );
        res.data = line;
      }
    });

    this.data = datalabels;
  }

  updateChartOptions() {
    if (this.config.dark) this.applyDarkTheme();
    else this.applyLightTheme();
  }

  applyLightTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }

  applyDarkTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
      // animations: {
      //   tension: {
      //     duration: 1000,
      //     easing: 'linear',
      //     from: 1,
      //     to: 0,
      //     loop: true
      //   }
      // },
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
