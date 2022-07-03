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
  {
    path: '/local-alignment',
    label: 'Local Alignment',
  },
  {
    path: '/affine-gap-penalty-alignment',
    label: 'Affine Gap Alignment',
  },
];

export default routes;
