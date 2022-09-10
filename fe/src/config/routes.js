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
      { path: '/problem-kusura', label: 'Pohlepni pristup' },
      { path: '/problem-kusura#vizualizacija', label: 'Rekurzivni pristup' },
      { path: '/problem-kusura#vizualizacija2', label: 'Dinamički pristup' },
    ],
  },
  {
    path: '/menhetn-turista',
    label: 'Menhetn turista',
    children: [
      { path: '/menhetn-turista', label: 'Vizuelizacija' },
      { path: '/menhetn-turista#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/problem-poravnanja',
    label: 'Problem poravnanja',
    children: [
      { path: '/problem-poravnanja', label: 'Vizuelizacija' },
      { path: '/problem-poravnanja#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/globalno-poravnanje',
    label: 'Globalno poravnanje',
    children: [
      { path: '/globalno-poravnanje', label: 'Vizuelizacija' },
      { path: '/globalno-poravnanje#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/lokalno-poravnanje',
    label: 'Lokalno poravnanje',
    children: [
      { path: '/lokalno-poravnanje', label: 'Vizuelizacija' },
      { path: '/lokalno-poravnanje#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/afine-kazne',
    label: 'Afine kazne',
    children: [
      { path: '/afine-kazne', label: 'Vizuelizacija' },
      { path: '/afine-kazne#vizualizacija2', label: 'Vizuelizacija2' },
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
