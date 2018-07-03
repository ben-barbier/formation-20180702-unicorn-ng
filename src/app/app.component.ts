import {Component} from '@angular/core';
import {Unicorn} from './models/unicorn.model';

@Component({
    selector: 'uni-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public unicorns: Unicorn[] =
        [{
            'id': 1,
            'name': 'Baby',
            'birthyear': 2018,
            'weight': 10,
            'photo': 'http://0.0.0.0:3000/unicorns/photos/unicorn-1.jpg',
            'hobbies': ['Sleep', 'Cry'],
            'capacities': [1, 2]
        }, {
            'id': 2,
            'name': 'Dylan',
            'birthyear': 2017,
            'weight': 32,
            'photo': 'http://0.0.0.0:3000/unicorns/photos/unicorn-2.jpg',
            'hobbies': ['Coffee', 'Sing', 'Cinema'],
            'capacities': [1]
        }, {
            'id': 3,
            'name': 'Charly',
            'birthyear': 2006,
            'weight': 45,
            'photo': 'http://0.0.0.0:3000/unicorns/photos/unicorn-3.png',
            'hobbies': ['Read', 'Photography'],
            'capacities': [2]
        }, {
            'id': 4,
            'name': 'John',
            'birthyear': 2001,
            'weight': 54,
            'photo': 'http://0.0.0.0:3000/unicorns/photos/unicorn-4.jpg',
            'hobbies': ['Sport', 'Music'],
            'capacities': []
        }, {
            'id': 5,
            'name': 'Freddy',
            'birthyear': 1969,
            'weight': 90,
            'photo': 'http://0.0.0.0:3000/unicorns/photos/unicorn-5.jpg',
            'hobbies': ['Cut wood', 'Hockey'],
            'capacities': [3]
        }, {
            'id': 6,
            'name': 'Cindy',
            'birthyear': 2003,
            'weight': 46,
            'photo': 'http://0.0.0.0:3000/unicorns/photos/unicorn-6.jpg',
            'hobbies': ['Vampire Diaries', 'Gossip Girl', 'Justin Bieber', 'One Direction'],
            'capacities': [1, 2, 3]
        }];

    public logIt(event: MouseEvent) {
        console.log('it');
    }
}
