import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-selection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="content">
        <h1 class="title">Sistema de Inteligencia Empresarial</h1>
        <p class="subtitle">Seleccione el módulo de análisis que desea utilizar</p>
        
        <div class="agents-grid">
          <button class="agent-card primary" (click)="navigateToDataLoad()">
            <span class="icon">⚡</span>
            <h3>Análisis Completo</h3>
            <p>Evaluación integral del negocio</p>
          </button>
          
          <button class="agent-card" (click)="navigateToDataLoad()">
            <span class="icon">📈</span>
            <h3>Ventas</h3>
            <p>Predicción y análisis de ventas</p>
          </button>
          
          <button class="agent-card" (click)="navigateToDataLoad()">
            <span class="icon">🎯</span>
            <h3>Calidad</h3>
            <p>Métricas de calidad y mejoras</p>
          </button>
          
          <button class="agent-card" (click)="navigateToDataLoad()">
            <span class="icon">🏭</span>
            <h3>Producción</h3>
            <p>Optimización de producción</p>
          </button>
          
          <button class="agent-card" (click)="navigateToDataLoad()">
            <span class="icon">⚙️</span>
            <h3>Mantenimiento</h3>
            <p>Gestión predictiva</p>
          </button>
          
          <button class="agent-card" (click)="navigateToDataLoad()">
            <span class="icon">📊</span>
            <h3>Compras</h3>
            <p>Análisis de adquisiciones</p>
          </button>
          
          <button class="agent-card" (click)="navigateToDataLoad()">
            <span class="icon">📦</span>
            <h3>Inventario</h3>
            <p>Control de stock inteligente</p>
          </button>
        </div>
      </div>
      
      <footer class="footer">
        <div class="brand">
          <span class="company">Lyncros</span>
          <span class="division">Business Intelligence</span>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 40px 20px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .content {
      flex: 1;
      animation: fadeIn 0.6s ease-out;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 600;
      color: #1a237e;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .subtitle {
      color: #546e7a;
      text-align: center;
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }

    .agents-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      padding: 20px;
    }

    .agent-card {
      background: white;
      border: none;
      border-radius: 12px;
      padding: 24px;
      text-align: left;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: 100%;
    }

    .agent-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .agent-card.primary {
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      grid-column: 1 / -1;
    }

    .agent-card.primary h3,
    .agent-card.primary p {
      color: white;
    }

    .icon {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .agent-card h3 {
      font-size: 1.25rem;
      color: #1a237e;
      margin: 0;
    }

    .agent-card p {
      color: #546e7a;
      font-size: 0.9rem;
      margin: 0;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      padding: 20px;
    }

    .brand {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .company {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1a237e;
    }

    .division {
      font-size: 0.9rem;
      color: #546e7a;
    }

    @media (max-width: 768px) {
      .container {
        padding: 20px 10px;
      }

      .title {
        font-size: 2rem;
      }

      .agents-grid {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 10px;
      }
    }
  `]
})
export class AgentSelectionComponent {
  constructor(private router: Router) {}

  navigateToDataLoad() {
    this.router.navigate(['/load-data']);
  }
}