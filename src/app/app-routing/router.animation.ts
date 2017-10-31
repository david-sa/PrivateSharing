
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

// https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%', 'z-index': 1, background: 'white' })
    , { optional: true }),
    /* 2 */ query('.fade-up', style({ opacity: 0 })
    , { optional: true }),
    /* 3 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ]),
    /* 4 */ query(':enter .fade-up', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('0.5s ease-in-out', 
        style({ transform: 'translateY(0px)', opacity: 1 })
      )]), { optional: true })
    ]
  )
])