import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduit } from './page-produit';

describe('PageProduit', () => {
  let component: PageProduit;
  let fixture: ComponentFixture<PageProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
