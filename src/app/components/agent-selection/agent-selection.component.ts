import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-selection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Multi Agentes de IA</h2>
      
      <div class="agents-circle">
        <button class="agent-button top" (click)="navigateToDataLoad()">
          Elegir varios Agentes
        </button>
        
        <div class="agent-row">
          <button class="agent-button left" (click)="navigateToDataLoad()">
            Agente<br>Predicción de ventas
          </button>
          <button class="agent-button right" (click)="navigateToDataLoad()">
            Agente<br>Correlación de calidad
          </button>
        </div>
        
        <div class="agent-row">
          <button class="agent-button left" (click)="navigateToDataLoad()">
            Agente<br>Predicción de producción
          </button>
          <button class="agent-button right" (click)="navigateToDataLoad()">
            Agente<br>Gestión de mantenimiento
          </button>
        </div>
        
        <div class="agent-row">
          <button class="agent-button left" (click)="navigateToDataLoad()">
            Agente<br>Predicción de compras
          </button>
          <button class="agent-button right" (click)="navigateToDataLoad()">
            Agente<br>Gestión de inventario
          </button>
        </div>
        
        <button class="agent-button bottom" (click)="navigateToDataLoad()">
          Todos los Agentes
        </button>
      </div>
      
      <div class="footer">
        <span>Lyncros</span>
        <span>B.AI Automation</span>
      </div>
    </div>
  `,
  styles: [`
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    .agents-circle {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: 40px 0;
    }
    
    .agent-row {
      display: flex;
      gap: 100px;
    }
    
    .agent-button {
      padding: 15px 25px;
      border-radius: 25px;
      border: none;
      background-color: #b8c1ec;
      color: #232946;
      cursor: pointer;
      transition: transform 0.2s;
      text-align: center;
    }
    
    .agent-button:hover {
      transform: scale(1.05);
      background-color: #9ba5d9;
    }
    
    .footer {
      margin-top: 40px;
      display: flex;
      gap: 20px;
      color: #232946;
    }
  `]
})
export class AgentSelectionComponent {
  constructor(private router: Router) {}

  navigateToDataLoad() {
    this.router.navigate(['/load-data']);
  }
}