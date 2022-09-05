const routes = [
  {
    path: '/',
    label: 'Početna stranica',
  },
  {
    path: '/problem-kusura',
    label: 'Problem kusura',
    children: [
      { path: '/problem-kusura#vizualizacija1', label: 'Pohlepni pristup' },
      { path: '/problem-kusura#vizualizacija2', label: 'Rekurzivni pristup' },
      { path: '/problem-kusura#vizualizacija2', label: 'Dinamički pristup' },
    ],
  },
  {
    path: '/menhetn-turista',
    label: 'Menhetn turista',
    children: [
      { path: '/manhattan#vizualizacija1', label: 'Vizuelizacija' },
      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },
      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },

      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },

      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/problem-poravnanja',
    label: 'Problem poravnanja',
  },
  {
    path: '/globalno-poravnanje',
    label: 'Globalno poravnanje',
  },
  {
    path: '/lokalno-poravnanje',
    label: 'Lokalno poravnanje',
    children: [
      { path: '/manhattan#vizualizacija1', label: 'Vizuelizacija' },
      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },
      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },

      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },

      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/afine-kazne',
    label: 'Afine kazne',
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
