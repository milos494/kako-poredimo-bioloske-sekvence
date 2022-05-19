const routes = [
  {
    path: '/lcs',
    label: 'LCS',
  },
  {
    path: '/manhattan',
    label: 'Manhattan',
    children: [
      { path: '/manhattan#vizualizacija', label: 'Vizuelizacija' },
      { path: '/manhattan#vizualizacija', label: 'Vizuelizacija2' },
    ],
  },
  {
    path: '/global-alignment',
    label: 'Global Alignment',
  },
];

export default routes;
