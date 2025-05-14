import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  costAndRevenueI,
  productI,
  productMaturityI,
  transactionsI,
} from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}

  loadProducts() {
    return this.http.get<productI[]>('http://localhost:3000/products');
  }

  loadTransactions() {
    return this.http.get<transactionsI[]>('http://localhost:3000/transactions');
  }

  loadProductMaturity() {
    return this.http.get<productMaturityI[]>(
      'http://localhost:3000/productMaturity'
    );
  }

  loadSecuritues() {
    return this.http.get<productMaturityI[]>(
      'http://localhost:3000/securities'
    );
  }

  loadCostOfFund() {
    return this.http.get<costAndRevenueI[]>('http://localhost:3000/costOfFund');
  }

  loadRevenue() {
    return this.http.get<costAndRevenueI[]>('http://localhost:3000/revenue');
  }
}
