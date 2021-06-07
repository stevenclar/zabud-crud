import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarModule } from '@app/components/sidebar/sidebar.module';
import { HeaderModule } from '../../header/header.module';
import { PrivateLayoutComponent } from './layout.component';

describe('PrivateLayoutComponent', () => {
  let component: PrivateLayoutComponent;
  let fixture: ComponentFixture<PrivateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateLayoutComponent],
      imports: [RouterTestingModule, HeaderModule, SidebarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
