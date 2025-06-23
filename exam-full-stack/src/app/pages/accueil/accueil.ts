import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil {

}
