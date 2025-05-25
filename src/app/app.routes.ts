import { Routes } from '@angular/router';
import { AgentSelectionComponent } from './components/agent-selection/agent-selection.component';
import { DataLoadComponent } from './components/data-load/data-load.component';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';

export const routes: Routes = [
  { path: '', component: AgentSelectionComponent },
  { path: 'load-data', component: DataLoadComponent },
  { path: 'visualization', component: DataVisualizationComponent },
];