import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-visualization',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="price-comparison">
        <h3>Comparación de Precios</h3>
        <table>
          <tr>
            <th>Producto</th>
            <th>Actual</th>
            <th>Predicción</th>
          </tr>
          <tr *ngFor="let product of products">
            <td>{{product.name}}</td>
            <td>{{product.actual}}$</td>
            <td>{{product.prediction}}$</td>
          </tr>
        </table>
        <button class="export-button">Exportar</button>
      </div>
      
      <div class="data-section">
        <div class="search-section">
          <input
            type="text"
            placeholder="Buscar un producto"
            [(ngModel)]="searchQuery"
            class="search-input"
          >
          
          <div class="product-list">
            <div class="product-item" *ngFor="let item of filteredProducts">
              <span>{{item.name}}</span>
              <button class="details-button">Ver detalles</button>
            </div>
          </div>
        </div>
        
        <div class="graph-section">
          <h3>Mayo</h3>
          <div class="graph-container">
            <!-- Chart would be rendered here -->
          </div>
          <div class="legend">
            <span>⚪ Ventas mayo pasado = 150k</span>
            <span>⚪ Ventas mayo operables = 130k</span>
          </div>
          <button class="report-button">Reporte</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    .price-comparison {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    
    th, td {
      padding: 10px;
      text-align: left;
    }
    
    .data-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .search-section {
      background-color: #eee;
      padding: 20px;
      border-radius: 8px;
    }
    
    .search-input {
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
    }
    
    .product-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    
    .graph-section {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
    }
    
    .graph-container {
      height: 300px;
      background-color: #f8f9fa;
      margin: 20px 0;
    }
    
    .legend {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
    
    button {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      background-color: #3b82f6;
      color: white;
    }
  `]
})
export class DataVisualizationComponent implements OnInit {
  products = [
    { name: 'Harina Blancaflor Leudante 1kg', actual: 400.00, prediction: 450.00 },
    { name: 'Fideos Matarazzo Mostacholes Rayados 500g', actual: 370.00, prediction: 300.00 },
    { name: 'Aceite Cocinero Girasol Botella PET 900ml', actual: 320.00, prediction: 280.00 }
  ];
  
  searchQuery: string = '';
  
  get filteredProducts() {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  
  ngOnInit() {
    // Initialize chart here
  }
}