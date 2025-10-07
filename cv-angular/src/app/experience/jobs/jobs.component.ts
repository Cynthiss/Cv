import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.jobs = this.dataService.jobs;
  }
}
