'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifieds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classifieds').insert({
          id:1,
          title:'Later Tater',
          description:'Pour-over chartreuse cray, yr live-edge locavore kale chips woke crucifix waistcoat. Crucifix fashion axe snackwave cliche church-key.',
          price:600,
          item_image:'https://s3-us-west-2.amazonaws.com/popuparcade.com/spuds/spud-1.png',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date('2016-06-26T14:26:16.000Z')
        }),
        knex('classifieds').insert({
          id:2,
          title:'Spudded',
          description:'Pour-over chartreuse cray, yr live-edge locavore kale chips woke crucifix waistcoat. Crucifix fashion axe snackwave cliche church-key.',
          price:1,
          item_image:'https://s3-us-west-2.amazonaws.com/popuparcade.com/spuds/spud-2.png',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date('2016-06-26T14:26:16.000Z')
        }),
        knex('classifieds').insert({
          id:3,
          title:'Mean Mashed',
          description:'Pour-over chartreuse cray, yr live-edge locavore kale chips woke crucifix waistcoat. Crucifix fashion axe snackwave cliche church-key.',
          price:10,
          item_image:'https://s3-us-west-2.amazonaws.com/popuparcade.com/spuds/spud-3.png',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date('2016-06-26T14:26:16.000Z')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds))");
    });
};
