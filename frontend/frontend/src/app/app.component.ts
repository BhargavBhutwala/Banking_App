import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Dashboard } from "./components/dashboard/dashboard";
import { TransactionComponent } from "./components/transaction/transaction";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Dashboard, TransactionComponent],
    standalone: true,
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class AppComponent{
     protected readonly title = signal('Bharggav');
}