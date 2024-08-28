import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule
        
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule
    ]
})
export class MaterialModule {}
