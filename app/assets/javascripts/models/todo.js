App.Fattura = DS.Model.extend({
  name   	: DS.attr('string'),
  quantita	: DS.attr('string')
});


App.Fattura.FIXTURES = [
 {
   id: 1,
   name: 'Fattura Num 1',
   quantita: '100'
 }
];