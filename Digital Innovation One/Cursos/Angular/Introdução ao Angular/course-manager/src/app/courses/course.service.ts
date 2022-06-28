import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private coursesUrl: string = 'http://localhost:3100/api/courses'

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if(course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`)
    }     

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: forms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'June, 15, 2022'
    },
    {
        id: 2,
        name: 'Angular: HTTP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: '/assets/images/http.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4,
        releaseDate: 'June, 15, 2022'
    },
    {
        id: 3,
        name: 'Angular: CLI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: '/assets/images/cli.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 3,
        releaseDate: 'June, 15, 2022'
    },
    {
        id: 4,
        name: 'Angular: router',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: '/assets/images/router.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5,
        releaseDate: 'June, 15, 2022'
    },
    {
        id: 5,
        name: 'Angular: animations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: '/assets/images/animations.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'June, 15, 2022'
    } 
]