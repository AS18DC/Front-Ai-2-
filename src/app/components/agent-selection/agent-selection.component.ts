import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-selection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="cyber-frame">
        <h2 class="title">Sistema Multi-Agentes IA</h2>
        
        <div class="agents-grid">
          <button class="agent-button main-agent" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">🤖</span>
              <span>Elegir varios Agentes</span>
            </div>
          </button>
          
          <button class="agent-button" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">📈</span>
              <span>Predicción de ventas</span>
            </div>
          </button>
          
          <button class="agent-button" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">⭐</span>
              <span>Correlación de calidad</span>
            </div>
          </button>
          
          <button class="agent-button" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">🏭</span>
              <span>Predicción de producción</span>
            </div>
          </button>
          
          <button class="agent-button" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">🔧</span>
              <span>Gestión de mantenimiento</span>
            </div>
          </button>
          
          <button class="agent-button" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">🛒</span>
              <span>Predicción de compras</span>
            </div>
          </button>
          
          <button class="agent-button" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">📦</span>
              <span>Gestión de inventario</span>
            </div>
          </button>
          
          <button class="agent-button main-agent" (click)="navigateToDataLoad()">
            <div class="button-content">
              <span class="icon">🌟</span>
              <span>Todos los Agentes</span>
            </div>
          </button>
        </div>
      </div>
      
      <div class="footer">
        <div class="company-info">
          <span class="company-name">Lyncros</span>
          <span class="division">B.AI Automation</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: relative;
      overflow: hidden;
    }

    .cyber-frame {
      background: rgba(16, 24, 64, 0.8);
      border: 2px solid rgba(0, 195, 255, 0.3);
      border-radius: 15px;
      padding: 40px;
      box-shadow: 0 0 30px rgba(0, 195, 255, 0.2);
      backdrop-filter: blur(10px);
      max-width: 1200px;
      width: 90%;
    }

    .title {
      color: #00c3ff;
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 40px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 0 0 10px rgba(0, 195, 255, 0.5);
    }

    .agents-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 40px 0;
    }

    .agent-button {
      background: rgba(25, 35, 85, 0.8);
      border: 1px solid rgba(0, 195, 255, 0.3);
      border-radius: 10px;
      padding: 20px;
      color: #e0e0ff;
      transition: all 0.3s ease;
      min-height: 120px;
    }

    .agent-button:hover {
      transform: translateY(-5px);
      background: rgba(35, 45, 95, 0.9);
      border-color: rgba(0, 195, 255, 0.8);
      box-shadow: 0 0 20px rgba(0, 195, 255, 0.4);
    }

    .button-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .icon {
      font-size: 2em;
    }

    .main-agent {
      grid-column: 1 / -1;
      background: linear-gradient(135deg, rgba(25, 35, 85, 0.9), rgba(45, 55, 105, 0.9));
      animation: glow 2s infinite;
    }

    .footer {
      position: fixed;
      bottom: 20px;
      display: flex;
      gap: 20px;
      background: rgba(16, 24, 64, 0.8);
      padding: 15px 30px;
      border-radius: 30px;
      border: 1px solid rgba(0, 195, 255, 0.3);
    }

    .company-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    .company-name {
      color: #00c3ff;
      font-size: 1.2em;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .division {
      color: #e0e0ff;
      font-size: 0.9em;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .cyber-frame {
        padding: 20px;
      }

      .title {
        font-size: 1.8em;
      }

      .agents-grid {
        grid-template-columns: 1fr;
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