import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export class ProductService {
    private apiUrl: string = 'http://localhost/';

    constructor(private http: HttpClient) {};

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl + "products");
    }

    getProductById(id: number): Observable <Product> {
        return this.http.get<Product>(`${this.apiUrl}/${"product/" + id}`);
    }
}
