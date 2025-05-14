import { Component, inject, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import {
  costAndRevenueI,
  NetOpeningPosition,
  productI,
  productMaturityI,
  transactionsI,
} from '../../models/interface';
import { Chart, registerables } from 'chart.js';
import { netOpeningPositions } from '../../data';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  netOpeningPosition: NetOpeningPosition[] = netOpeningPositions;

  //Products
  productData: productI[] = [];
  typeData: string[] = [];
  profitLossData: number[] = [];

  //Transactions
  transactionData: transactionsI[] = [];
  transactionColorData: string[] = [];
  transactionTypeData: string[] = [];
  volumeData: number[] = [];

  //Product Maturity
  pMData: productMaturityI[] = [];
  pMColorData: string[] = [];
  pMValues: number[] = [];
  pMLabels: string[] = [];

  //Securities
  securities: productMaturityI[] = [];
  securitiesLabel: string[] = [];
  securitiesValue: number[] = [];

  //cost of Fund
  cofData: costAndRevenueI[] = [];
  cofLabel: string[] = [];
  cofvalue: number[] = [];
  cofvalue2: number[] = [];

  //Revenue
  revenueData: costAndRevenueI[] = [];
  revenueLabel: string[] = [];
  revenuevalue: number[] = [];
  revenuevalue2: number[] = [];

  private chartService = inject(ChartService);

  ngOnInit(): void {
    this.loadProductData();
    this.loadTransactions();
    this.loadProductMaturity();
    this.loadSecurities();
    this.loadCostOfFund();
    this.loadRevenue();
  }

  // Products
  loadProductData() {
    this.chartService.loadProducts().subscribe((item) => {
      this.productData = item;
      if (this.productData !== null) {
        this.productData.map((item) => {
          this.typeData.push(item.type);
          this.profitLossData.push(item.profitLoss);
        });
      }

      this.RenderBarChart(this.typeData, this.profitLossData, '#FCA542');
    });
  }

  // Transactions
  loadTransactions() {
    this.chartService.loadTransactions().subscribe((item) => {
      this.transactionData = item;
      if (this.transactionData !== null) {
        this.transactionData.map((item) => {
          this.transactionColorData.push(item.colorData);
          this.volumeData.push(item.volume);
          this.transactionTypeData.push(item.type);
        });
      }

      console.log(item);

      this.RenderDoughnutChart(
        this.transactionTypeData,
        this.volumeData,
        this.transactionColorData
      );
    });
  }

  //Product Maturity
  loadProductMaturity() {
    this.chartService.loadProductMaturity().subscribe((item) => {
      console.log(item);
      this.pMData = item;
      if (this.pMData !== null) {
        this.pMData.map((data) => {
          this.pMLabels.push(data.label);
          this.pMValues.push(data.value);
          this.pMColorData.push(data.colorData);
        });
      }

      this.RenderDoughnutChart2(this.pMLabels, this.pMValues, this.pMColorData);
    });
  }

  //Securities
  loadSecurities() {
    this.chartService.loadSecuritues().subscribe((item) => {
      this.securities = item;

      console.log(item);

      if (this.securities !== null) {
        this.securities.map((item) => {
          this.securitiesLabel.push(item.label);
          this.securitiesValue.push(item.value);
        });
      }

      this.RenderHorizontalBarChart(
        this.securitiesLabel,
        this.securitiesValue,
        '#FCA542'
      );
    });
  }

  //cost of Fund
  loadCostOfFund() {
    this.chartService.loadCostOfFund().subscribe((item) => {
      this.cofData = item;
      if (this.cofData !== null) {
        this.cofData.map((item) => {
          this.cofLabel.push(item.region);
          this.cofvalue.push(item.budget);
          this.cofvalue2.push(item.actual);
        });

        this.RenderLineChart(
          this.cofLabel,
          this.cofvalue,
          this.cofvalue2,
          '#8455B9',
          '#FCA542'
        );
      }
    });
  }

  //Revenue Chart
  loadRevenue() {
    this.chartService.loadRevenue().subscribe((item) => {
      this.revenueData = item;
      if (this.revenueData !== null) {
        this.revenueData.map((item) => {
          this.revenueLabel.push(item.region);
          this.revenuevalue.push(item.budget);
          this.revenuevalue2.push(item.actual);
        });

        this.RenderGroupedBarChart(
          this.revenueLabel,
          this.revenuevalue,
          this.revenuevalue2,
          '#5E227F',
          '#FCA542'
        );
      }
    });
  }

  // Product Chart
  RenderBarChart(labelData: string[], valueData: number[], colorData: any) {
    this.Renderchart(
      labelData,
      valueData,
      colorData,
      'products',
      'bar',
      true,
      true,
      false,
      true,
      true,
      false,
      '',
      '',
      ''
    );
  }

  // Transaction Chart
  RenderDoughnutChart(
    labelData: string[],
    valueData: number[],
    colorData: any
  ) {
    this.Renderchart(
      labelData,
      valueData,
      colorData,
      'transactions',
      'doughnut',
      false,
      false,
      false,
      false,
      false,
      false,
      '',
      '',
      ''
    );
  }
  // PRODUCT MATURITY Chart
  RenderDoughnutChart2(
    labelData: string[],
    valueData: number[],
    colorData: any
  ) {
    this.Renderchart(
      labelData,
      valueData,
      colorData,
      'productMaturity',
      'doughnut',
      false,
      false,
      false,
      false,
      false,
      false,
      '',
      '',
      ''
    );
  }

  //Security Chart
  RenderHorizontalBarChart(
    labelData: string[],
    valueData: number[],
    colorData: any
  ) {
    this.Renderchart(
      labelData,
      valueData,
      colorData,
      'securities',
      'bar',
      false,
      true,
      true,
      true,
      true,
      false,
      'y',
      '',
      ''
    );
  }
  //cost of Fund Chart
  RenderLineChart(
    labelData: string[],
    valueData: number[],
    valueData2: any,
    colorData: any,
    colorData2: any
  ) {
    this.Renderchart(
      labelData,
      valueData,
      colorData,
      'costOfFund',
      'line',
      true,
      true,
      false,
      true,
      true,
      false,
      '',
      valueData2,
      colorData2
    );
  }

  //Revenue Chart
  RenderGroupedBarChart(
    labelData: string[],
    valueData: number[],
    valueData2: any,
    colorData: any,
    colorData2: any
  ) {
    this.Renderchart(
      labelData,
      valueData,
      colorData,
      'revenue',
      'bar',
      true,
      true,
      false,
      true,
      true,
      false,
      '',
      valueData2,
      colorData2
    );
  }

  Renderchart(
    labelData: string[],
    valueData: number[],
    colorData: any,
    chartId: any,
    chartType: any,
    yGridLine: boolean,
    yGrid: boolean,
    xGridLine: boolean,
    xGrid: boolean,
    xDrawBorder: boolean,
    yDrawBorder: boolean,
    axis: string,
    valueData2: any,
    colorData2: any
  ) {
    const myChart = new Chart(chartId, {
      type: chartType,
      data: {
        labels: labelData,
        datasets: [
          {
            data: valueData,
            backgroundColor: colorData,
            barThickness: 40,
          },
          {
            data: valueData2,
            backgroundColor: colorData2,
            barThickness: 40,
          },
        ],
      },

      options: {
        indexAxis: axis,
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            display: yGrid,
            grid: {
              display: yGridLine,
              drawBorder: yDrawBorder,
            },
          },
          x: {
            display: xGrid,
            grid: {
              display: xGridLine,
              drawBorder: xDrawBorder,
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: 10,
              },
            },
          },
        },
      },
    });
  }
}
