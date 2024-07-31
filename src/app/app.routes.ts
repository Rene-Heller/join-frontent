import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { BoardComponent } from './pages/board/board.component';

export const routes: Routes = [
    { path: "Join-Login", component: LoginComponent },
    { path: 'Join-Signin', component: SignInComponent },
    { path: '', redirectTo: 'Join-Login', pathMatch: 'prefix' },
    {
        path: 'Join', component: JoinComponent,
        children: [
            {
                path: 'Summary', component: SummaryComponent,
            },
            {
                path: 'Board', component: BoardComponent
            },
            {
                path: 'AddTask', component: AddTaskComponent
            },
            {
                path: 'Contacts', component: ContactsComponent
            },
            {
                path: '', component: SummaryComponent
            }
        ]
    }
];
