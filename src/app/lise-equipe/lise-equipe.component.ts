import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-lise-equipe',
  templateUrl: './lise-equipe.component.html',
  styleUrls: ['./lise-equipe.component.css']
})
export class LiseEquipeComponent implements OnInit {
  equipes: any[] = [];

  constructor(private equipeService: EquipeService) {}

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(data => {
      this.equipes = data;
    });
  }
}
