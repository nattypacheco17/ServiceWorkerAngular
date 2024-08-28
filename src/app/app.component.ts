import {Component, signal } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaterialModule } from './material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2, name: 'Santo Domingo de los Tsáchilas', weight: 'Puerto Limón', symbol: 'Fibra Óptica'},
  {position: 3, name: 'Manabí', weight: 'El Carmen', symbol: 'Radio Enlace'},
  {position: 4, name: 'Santo Domingo de los Tsáchilas', weight: 'Luz de America', symbol: 'Fibra Óptica'},
  {position: 5, name: 'Manabí', weight: 'Recinto Santa Cecilia', symbol: 'Fibra Óptica'},
  {position: 6, name: 'Manabí', weight: 'Recinto Bijagual', symbol: 'Fibra Óptica'},
  {position: 7, name: 'Manabí', weight: 'Recinto Frontera', symbol: 'Radio Enlace'},
  {position: 8, name: 'Santo Domingo de los Tsáchilas', weight: 'Patricia Pilar', symbol: 'Radio Enlace'},
  {position: 9, name: 'Santo Domingo de los Tsáchilas', weight: 'Recinto San Jacinto del Búa', symbol: 'Fibra Óptica'},
  {position: 10, name: 'Santo Domingo de los Tsáchilas', weight: 'Santo Domingo', symbol: 'Fibra Óptica'},
  {position: 11, name: 'Santo Domingo de los Tsáchilas', weight: 'Juan Eulogio', symbol: 'Radio Enlace'},
  {position: 12, name: 'Manabí', weight: 'Recinto Avispa Chila', symbol: 'Radio Enlace'},
  {position: 13, name: 'Santo Domingo de los Tsáchilas', weight: 'Cheguevara', symbol: 'Fibra Óptica'},
  {position: 14, name: 'Santo Domingo de los Tsáchilas', weight: 'Loa Unificados', symbol: 'Radio Enlace'},
  {position: 15, name: 'Santo Domingo de los Tsáchilas', weight: 'Brisas del Colorado', symbol: 'Fibra Óptica'},
  {position: 16, name: 'Manabí', weight: 'Recinto Pueblo Chico', symbol: 'Radio Enlace'},
  {position: 17, name: 'Santo Domingo de los Tsáchilas', weight: 'Via Quevedo', symbol: 'Radio Enlace'},
  {position: 18, name: 'Santo Domingo de los Tsáchilas', weight: 'Mutualista Pichincha', symbol: 'Fibra Óptica'},
  {position: 20, name: 'Santo Domingo de los Tsáchilas', weight: 'La Lorena', symbol: 'Fibra Óptica'},
];
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,MatFormFieldModule, MatInputModule, MatTableModule,
    MatPaginator,MatPaginatorModule,CommonModule,MatExpansionModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})


export class AppComponent {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  readonly panelOpenState = signal(false);

}

