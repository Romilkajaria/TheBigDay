import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RadioButtonsComponent} from "./radiobuttons.component";

describe('RadiobuttonsComponent', () => {
    let component: RadioButtonsComponent<string>;
    let fixture: ComponentFixture<RadioButtonsComponent<string>>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RadioButtonsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(RadioButtonsComponent<string>);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
