import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Observable, publish } from 'rxjs';
import { ProductService } from '../../services/product/product.service';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { CounterState } from '../../ngrx/counter/counter.state';
import * as CounterActions from '../../ngrx/counter/counter.actions';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() image: string = '';
  @Input() id: number = 0;
  @Output() productClicked = new EventEmitter<any>();
  counter$: Observable<number>;

  constructor(
    public productService: ProductService,
    private store: Store<{ counter: CounterState }>,
  ) {
    this.counter$ = store.select('counter', 'count');
  }

  addProductToCart() {
    this.productClicked.emit();
  }

  increase() {
    this.store.dispatch(CounterActions.increase());
  }

  decrease() {
    this.store.dispatch(CounterActions.decrease());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
