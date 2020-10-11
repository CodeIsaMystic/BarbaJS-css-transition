import barba from '@barba/core';
import barbaCss from '@barba/css';


barba.use(barbaCss);

const body = document.querySelector('body');

/**  GLOBAL HOOK TO HANDLE THE BODY BCG COLOR  **/
barba.hooks.before((data) => {

  const background = data.current.container.dataset.background;
  /**  SET NEW VALUES FORM THE DATA-BCG  TO THE CSS CLASS **/
  body.style.setProperty('--page-background', background);
});


barba.init({
  /*  INNA ARRAY  */
  transitions: [
    {
      /** CUSTOMIZE:
       * GENERATE A NAME FOR THE CSS CLASS WHICH WILL APPLY */
      name: 'home', 
      to: {
        namespace: ['home'] /* inna array  */
      },     
      sync: true,
      /** ONCE FUNCTION:
       * WILL WRITE SOME CSS STYLES AND APPLY ONCE ON LOAD  **/
      once() {/*console.log('The Log will not be apllied on once metohd, only CSS');*/},
      leave() {},
      enter() {}
    }, {
      name: 'fade',
      to: {
        /* Possibly going to multiple spaces  */
        namespace: ['fade']
      },
      /* When leaving will entering  */
      leave() {},
      enter() {}
    }, {
      name: 'clip',
      /** For the clip animation 
       * we do need a second container 
       * to create the clip effect (here from the page's center)
       *
      ** Here the both el (leave/enter) be at the same time in the DOM */
      sync: true,
      to: {
        namespace: ['clip'],
      },
      /* When leaving will entering  */
      leave() {},
      enter() {},
      beforeEnter() {
        //console.log('here beforeEnter');
      }
    }, {
      name: 'with-cover',
      to: {
        namespace: ['with-cover'],
      },
      leave() {},
      enter() {}
    }
  ]

});
