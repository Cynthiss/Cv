import { ComponentFixture, TestBed } from '@angular/core/testing';

// Update the import path if your Skills component is defined in 'skills.component.ts'
// Update the import to match the actual exported class name from skills.component.ts
import { SkillsComponent } from './skills.component';
describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
