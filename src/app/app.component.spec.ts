import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;

    beforeEach(() => {
        component = new AppComponent();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should have a title', () => {
        expect(component.title).toEqual('app');
    });

    it('should render title in a h1 tag', () => {
        const compiled = component.render();
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    });
});