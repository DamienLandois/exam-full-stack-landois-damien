import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueUtilisateur } from './historique-utilisateur';

describe('HistoriqueUtilisateur', () => {
  let component: HistoriqueUtilisateur;
  let fixture: ComponentFixture<HistoriqueUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueUtilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
