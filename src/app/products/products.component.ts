import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}
  ngOnInit() {
    this.dataStorageService.fetchProducts().subscribe();
  }
}
