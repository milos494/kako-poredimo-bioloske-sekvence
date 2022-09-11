const routes = [
  {
    path: '/',
    label: 'Početna stranica',
    children: [
      { path: '/', label: 'Ribozomalni proteini' },
      { path: '/#nrp', label: 'Neribozomalni proteini' },
    ],
  },
  {
    path: '/poravnanje-sekvenci',
    label: 'Poravnanje sekvenci',
  },
  {
    path: '/problem-kusura',
    label: 'Problem kusura',
    children: [
      { path: '/problem-kusura', label: 'Problem' },
      { path: '/problem-kusura#pohlepan', label: 'Pohlepan pristup' },
      { path: '/problem-kusura#rekurzivni', label: 'Rekurzivni pristup' },
      { path: '/problem-kusura#dinamicki', label: 'Dinamički pristup' },
    ],
  },
  {
    path: '/menhetn-turista',
    label: 'Menhetn turista',
    children: [
      { path: '/menhetn-turista', label: 'Problem' },
      { path: '/menhetn-turista#pohlepan', label: 'Pohlepan pristup' },
      { path: '/menhetn-turista#rekurzivni', label: 'Rekurzivni pristup' },
      { path: '/menhetn-turista#dinamicki', label: 'Dinamički pristup' },
      { path: '/menhetn-turista#implementacija', label: 'Implementacija' },
    ],
  },
  {
    path: '/problem-poravnanja',
    label: 'Problem poravnanja',
    children: [
      { path: '/problem-poravnanja', label: 'Konstrukcija grafa' },
      { path: '/problem-poravnanja#dinamicki', label: 'Dinamički pristup' },
      { path: '/problem-poravnanja#implementacija', label: 'Implementacija' },
    ],
  },
  {
    path: '/problem-poravnanja',
    label: 'Putanja proizvoljni graf',
  },
  {
    path: '/globalno-poravnanje',
    label: 'Globalno poravnanje',
    children: [
      { path: '/globalno-poravnanje', label: 'Problem' },
      { path: '/globalno-poravnanje#implementacija', label: 'Implementacija' },
    ],
  },
  {
    path: '/lokalno-poravnanje',
    label: 'Lokalno poravnanje',
    children: [
      { path: '/lokalno-poravnanje', label: 'Problem' },
      { path: '/lokalno-poravnanje#implementacija', label: 'Implementacija' },
    ],
  },
  {
    path: '/afine-kazne',
    label: 'Afine kazne',
    children: [
      { path: '/afine-kazne', label: 'Problem' },
      { path: '/afine-kazne#konstrukcija', label: 'Konstrukcija grafa' },
      { path: '/afine-kazne#implementacija', label: 'Implementacija' },
    ],
  },
  {
    path: '/prostorna-poboljsanja',
    label: 'Prostorna poboljšanja',
  },
  {
    path: '/visestruko-poravanje',
    label: 'Višestruko poravnanje',
  },
];

export default routes;
