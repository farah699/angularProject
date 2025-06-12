import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EquipeService } from '../equipe.service'; // Assurez-vous d'avoir ce service

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
  matchsForm: FormGroup;
  equipes: any[] = [];
  submittedMatches: any[] = []; // Liste pour stocker les matchs soumis
  errorMessage: string = ''; // Pour stocker le message d'erreur

constructor(private fb: FormBuilder, private equipeService: EquipeService) {
    this.matchsForm = this.fb.group({
      date: ['', [Validators.required, this.dateValidator.bind(this)]],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      equipeA: ['', Validators.required],
      equipeB: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Récupérer la liste des équipes depuis db.json
    this.equipeService.getEquipes().subscribe(data => {
      this.equipes = data;
    });
  }

  // Validateur personnalisé pour la date
  dateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignorer l'heure pour la comparaison
    if (selectedDate < today) {
      return { invalidDate: true };
    }
    return null;
  }

onSubmit(): void {
    this.errorMessage = ''; // Réinitialiser le message d'erreur
    if (this.matchsForm.valid) {
      const formData = this.matchsForm.value;
      const equipeA = this.equipes.find(e => e.id === formData.equipeA);
      const equipeB = this.equipes.find(e => e.id === formData.equipeB);

      // Vérification des équipes identiques
      if (formData.equipeA === formData.equipeB) {
        this.errorMessage = 'Il faut choisir deux équipes différentes';
      }
      // Vérification des natifs différents
      else if (equipeA && equipeB && equipeA.natif !== equipeB.natif) {
        this.errorMessage = 'Les équipes doivent être de même natif';
      } else {
        this.submittedMatches.push(formData);
        console.log('Match ajouté :', this.submittedMatches);
        this.matchsForm.reset();
        return; // Sortir si tout est valide
      }
    } else if (this.matchsForm.get('date')?.errors?.['invalidDate']) {
      this.errorMessage = 'La date doit être supérieure ou égale à la date d\'aujourd\'hui';
    }
  }

  

  // Méthode pour vérifier si tous les champs sont remplis
  isFormFilled(): boolean {
    return this.matchsForm.valid && Object.values(this.matchsForm.value).every(value => value !== '');
  }

  
  
  

  // Méthode fictive pour sauvegarder (à implémenter selon vos besoins)
  saveMatch(data: any) {
    // Exemple : Ajouter à une liste ou envoyer à une API
    console.log('Match sauvegardé :', data);
  }}
