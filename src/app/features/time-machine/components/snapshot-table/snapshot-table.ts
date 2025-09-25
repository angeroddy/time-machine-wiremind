import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Snapshot } from '../../../../core/models';
import { TimeMachineService } from '../../../../core/services/time-machine.service';

@Component({
  selector: 'app-snapshot-table',
  imports: [CommonModule],
  templateUrl: './snapshot-table.html',
  styleUrl: './snapshot-table.css'
})
export class SnapshotTable {
  snapshots: Snapshot[] = [];
  
 
  itemsPerPage: number = 2;
  currentPage: number = 1;
  paginatedSnapshots: Snapshot[] = [];
  totalPages: number = 0;

  constructor(private timeMachineService: TimeMachineService) { }

  ngOnInit(): void {

    this.timeMachineService.snapshots$.subscribe(data => {
      this.snapshots = data;
      this.updatePagination();
    });
  }


  updatePagination(): void {
    this.totalPages = Math.ceil(this.snapshots.length / this.itemsPerPage);

    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    
    this.updatePaginatedSnapshots();
  }


  updatePaginatedSnapshots(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedSnapshots = this.snapshots.slice(startIndex, endIndex);
  }

 
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedSnapshots();
    }
  }


  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedSnapshots();
    }
  }


  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedSnapshots();
    }
  }

  
  canGoNext(): boolean {
    return this.currentPage < this.totalPages;
  }

 
  canGoPrevious(): boolean {
    return this.currentPage > 1;
  }


  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}