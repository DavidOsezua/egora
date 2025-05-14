import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/adminFeatures/admin/admin.component';
import { StaticDataComponent } from './components/static-data/static-data.component';
import { ProductComponent } from './components/product/product.component';
import { GeneralServiceComponent } from './components/general-service/general-service.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { DealsComponent } from './components/deals/deals.component';
import { MarketRiskComponent } from './components/market-risk/market-risk.component';
import { AuxillaryServiceComponent } from './components/auxillary-service/auxillary-service.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReportComponent } from './components/report/report.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { UsersComponent } from './components/adminFeatures/users/users.component';
import { NewUsersComponent } from './components/adminFeatures/users/new-users/new-users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'staticdata',
        component: StaticDataComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'generalservice',
        component: GeneralServiceComponent,
      },
      {
        path: 'workflow',
        component: WorkflowComponent,
      },
      {
        path: 'deals',
        component: DealsComponent,
      },
      {
        path: 'marketrisk',
        component: MarketRiskComponent,
      },
      {
        path: 'auxiliaryservice',
        component: AuxillaryServiceComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'utilities',
        component: UtilitiesComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'newusers',
        component: NewUsersComponent,
      },
    ],
  },
];
