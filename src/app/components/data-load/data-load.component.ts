import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-load',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <button class="start-button" (click)="navigateToVisualization()">Iniciar</button>
      
      <div class="content">
        <h2>Cargar Datos</h2>
        
        <div class="upload-section">
          <div class="file-upload">
            <span>Ventas</span>
            <div class="upload-box" (click)="fileInput.click()">
              <input
                #fileInput
                type="file"
                (change)="onFileSelected($event)"
                style="display: none"
              >
              <span class="upload-icon">⭐</span>
            </div>
          </div>
        </div>
        
        <input
          type="text"
          class="extra-data"
          placeholder="Escriba datos extras si gusta..."
          [(ngModel)]="extraData"
        >
      </div>
    </div>
  `,
  styles: [`
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    .start-button {
      align-self: flex-end;
      padding: 10px 20px;
      border-radius: 50%;
      background-color: #3b82f6;
      color: white;
      border: none;
      cursor: pointer;
    }
    
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
    
    .upload-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    
    .file-upload {
      text-align: center;
    }
    
    .upload-box {
      width: 100px;
      height: 100px;
      border: 2px dashed #666;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 10px;
    }
    
    .extra-data {
      width: 300px;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
    }
  `]
})
export class DataLoadComponent {
  extraData: string = '';
  
  constructor(private router: Router) {}
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Handle file upload logic here
  }
  
  navigateToVisualization() {
    this.router.navigate(['/visualization']);
  }
}