const routes = [
  {
    path: '/lcs',
    label: 'LCS',
  },
  {
    path: '/manhattan',
    label: 'Manhattan',
    children: [
      { path: '/manhattan#vizualizacija1', label: 'Vizuelizacija' },
      { path: '/manhattan#vizualizacija2', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/global-alignment',
    label: 'Global Alignment',
  },
];

export default routes;
