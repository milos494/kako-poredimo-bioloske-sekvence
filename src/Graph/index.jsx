// import React, { useEffect, useRef, useState } from 'react';
// import cytoscape from 'cytoscape';
// import dagre from 'cytoscape-dagre';
// import { style } from './styles';
// // import grid

// cytoscape.use(dagre);

// export const defaults = {
//   // dagre algo options, uses default value on undefined
//   nodeSep: 30, // the separation between adjacent nodes in the same rank
//   edgeSep: undefined, // the separation between adjacent edges in the same rank
//   rankSep: 300, // the separation between each rank in the layout
//   rankDir: 'TB', // 'TB' for top to bottom flow, 'LR' for left to right,
//   ranker: 'network-simplex', // Type of algorithm to assign a rank to each node in the input graph. Possible values: 'network-simplex', 'tight-tree' or 'longest-path'
//   // 'network-simplex', 'tight-tree' or 'longest-path'
//   minLen() {
//     return 1;
//   }, // number of ranks to keep between the source and target of the edge
//   edgeWeight() {
//     return 1;
//   }, // higher weight edges are generally made shorter and straighter than lower weight edges

//   // general layout options
//   fit: true, // whether to fit to viewport
//   padding: 15, // fit padding
//   spacingFactor: 1, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
//   nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
//   animate: false, // whether to transition the node positions
//   animateFilter() {
//     return true;
//   }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
//   animationDuration: 5000, // duration of animation in ms if enabled
//   animationEasing: 'ease-out-expo', // easing of animation if enabled
//   boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
//   transform(node, pos) {
//     return pos;
//   }, // a function that applies a transform to the final node position
//   ready() {}, // on layoutready
//   stop() {}, // on layoutstop
// };

// // function Graph() {
// //   //   const elements = [
// //   //     { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
// //   //     { data: { id: 'two', label: 'Node 2' }, position: { x: 300, y: 0 } },
// //   //     { data: { id: 'three', label: 'Node 3' }, position: { x: 0, y: 300 } },
// //   //     { data: { id: 'four', label: 'Node 4' }, position: { x: 300, y: 300 } },
// //   //     { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
// //   //  ];

// //   const tree = {
// //     root: { p: 'i1', a: 'i14', n: 'i26', m: 'i46', b: 'i62', s: 'i78', $: 13 },
// //     i1: { a: 'i2' },
// //     i2: { n: 'i3' },
// //     i3: { a: 'i4' },
// //     i4: { m: 'i5' },
// //     i5: { a: 'i6' },
// //     i6: { b: 'i7' },
// //     i7: { a: 'i8' },
// //     i8: { n: 'i9' },
// //     i9: { a: 'i10' },
// //     i10: { n: 'i11' },
// //     i11: { a: 'i12' },
// //     i12: { s: 'i13' },
// //     i13: { $: 0 },
// //     i14: { n: 'i15', m: 'i37', b: 'i55', s: 'i77' },
// //     i15: { a: 'i16' },
// //     i16: { m: 'i17', n: 'i69', s: 'i75' },
// //     i17: { a: 'i18' },
// //     i18: { b: 'i19' },
// //     i19: { a: 'i20' },
// //     i20: { n: 'i21' },
// //     i21: { a: 'i22' },
// //     i22: { n: 'i23' },
// //     i23: { a: 'i24' },
// //     i24: { s: 'i25' },
// //     i25: { $: 1 },
// //     i26: { a: 'i27' },
// //     i27: { m: 'i28', n: 'i72', s: 'i76' },
// //     i28: { a: 'i29' },
// //     i29: { b: 'i30' },
// //     i30: { a: 'i31' },
// //     i31: { n: 'i32' },
// //     i32: { a: 'i33' },
// //     i33: { n: 'i34' },
// //     i34: { a: 'i35' },
// //     i35: { s: 'i36' },
// //     i36: { $: 2 },
// //     i37: { a: 'i38' },
// //     i38: { b: 'i39' },
// //     i39: { a: 'i40' },
// //     i40: { n: 'i41' },
// //     i41: { a: 'i42' },
// //     i42: { n: 'i43' },
// //     i43: { a: 'i44' },
// //     i44: { s: 'i45' },
// //     i45: { $: 3 },
// //     i46: { a: 'i47' },
// //     i47: { b: 'i48' },
// //     i48: { a: 'i49' },
// //     i49: { n: 'i50' },
// //     i50: { a: 'i51' },
// //     i51: { n: 'i52' },
// //     i52: { a: 'i53' },
// //     i53: { s: 'i54' },
// //     i54: { $: 4 },
// //     i55: { a: 'i56' },
// //     i56: { n: 'i57' },
// //     i57: { a: 'i58' },
// //     i58: { n: 'i59' },
// //     i59: { a: 'i60' },
// //     i60: { s: 'i61' },
// //     i61: { $: 5 },
// //     i62: { a: 'i63' },
// //     i63: { n: 'i64' },
// //     i64: { a: 'i65' },
// //     i65: { n: 'i66' },
// //     i66: { a: 'i67' },
// //     i67: { s: 'i68' },
// //     i68: { $: 6 },
// //     i69: { a: 'i70' },
// //     i70: { s: 'i71' },
// //     i71: { $: 7 },
// //     i72: { a: 'i73' },
// //     i73: { s: 'i74' },
// //     i74: { $: 8 },
// //     i75: { $: 9 },
// //     i76: { $: 10 },
// //     i77: { $: 11 },
// //     i78: { $: 12 },
// //   };

// //   const [elements, setElements] = useState({ nodes: [], edges: [] });

// //   const formatedNodes = [];
// //   const formatedEdgdes = [];
// //   const keys = Object.keys(tree);
// //   const fff = (j) => {
// //     //  setTimeout(() => {
// //     if (j === keys.length) {
// //       return;
// //     }
// //     const cvor = keys[j];
// //     formatedNodes[cvor] = { data: { id: cvor, label: cvor } };

// //     Object.keys(tree[cvor]).forEach((ivica, index) => {
// //       // debugger;
// //       setTimeout(() => {
// //         console.log(ivica, index);
// //         formatedNodes[tree[cvor][ivica]] = {
// //           data: { id: tree[cvor][ivica], label: tree[cvor][ivica] },
// //         };
// //         formatedEdgdes.push({
// //           data: { source: cvor, target: tree[cvor][ivica], label: ivica },
// //         });
// //         debugger;
// //         setElements({
// //           nodes: Object.values(formatedNodes),
// //           edges: formatedEdgdes,
// //         });

// //         if (Object.keys(tree[cvor]).length - 1 === index) {
// //           fff(j + 1);
// //         }
// //       }, (index + 1) * 3000);
// //     });

// //     //  }, 3000);
// //   };

// //   //  const treeManhattan = {'00': {'01': 3, '10': 1},'01': {'02': 2, '11': 0}, '02': {'12': 2},
// //   //                         '10': {'11': 3, '20': 1},'11': {'12': 2, '21': 0}, '12': {'22': 2},
// //   //                         '20': {'21': 3},'21': {'22': 2}, '22': {}}
// //   //  const formatedNodes = []
// //   //  const formatedEdgdes = []
// //   //  Object.keys(tree).forEach((cvor) => {
// //   //   formatedNodes.push({data: {id: cvor, label: cvor}})

// //   //   Object.keys(tree[cvor]).forEach(ivica => {
// //   //     formatedEdgdes.push({data: {source: cvor, target: tree[cvor][ivica], label: ivica}})
// //   //   })

// //   //  })

// //   // const keys = Object.keys(treeManhattan)
// //   // const i = 0;
// //   //  const eee = (j) => {
// //   //    setTimeout(() => {
// //   //      if(j === keys.length) {
// //   //        return
// //   //      }
// //   //     const cvor = keys[j];
// //   //     formatedNodes[cvor] = {data: {id: cvor, label: cvor, position: {x: cvor[0]*100, y: cvor[1]*100}}}

// //   //     Object.keys(treeManhattan[cvor]).forEach(ivica => {
// //   //       formatedNodes[ivica] = {data: {id: ivica, label: ivica, position: {x: cvor[0]*100, y: cvor[1]*100}}}
// //   //       formatedEdgdes.push({data: {source: cvor, target: ivica, label: treeManhattan[cvor][ivica]}})
// //   //     })

// //   //     setElements({nodes: Object.values(formatedNodes), edges: formatedEdgdes})
// //   //     eee(j+1)
// //   //    }, 3000);
// //   //  }

// //   useEffect(() => {
// //     //  eee(0)
// //     fff(0);
// //   }, []);

// //   //  Object.keys(treeManhattan).forEach((cvor) => {
// //   //   setTimeout(() => {

// //   //     formatedNodes[cvor] = {data: {id: cvor, label: cvor}}

// //   //     Object.keys(treeManhattan[cvor]).forEach(ivica => {
// //   //       formatedNodes[ivica] = {data: {id: ivica, label: ivica}}
// //   //       formatedEdgdes.push({data: {source: cvor, target: ivica, label: treeManhattan[cvor][ivica]}})
// //   //     })

// //   //     setElements({nodes: Object.values(formatedNodes), edges: formatedEdgdes})
// //   //   }, 5000)
// //   // })

// //   //  const elements = {
// //   //    nodes: formatedNodes,
// //   //    edges: formatedEdgdes
// //   //  }

// //   //  console.log(formatedNodes,formatedEdgdes )

// //   // const layout = {name: 'grid'}

// //   const ref = useRef(null);
// //   useEffect(() => {
// //     console.log(elements);
// //     const cy = cytoscape({
// //       container: ref.current,
// //       boxSelectionEnabled: false,
// //       autounselectify: true,
// //       layout: {
// //         name: 'dagre',
// //         ...defaults,
// //       },
// //       zoom: 1,
// //       pan: { x: 0, y: 0 },
// //       minZoom: 0.1,
// //       maxZoom: 5,
// //       wheelSensitivity: 0.1,
// //       motionBlur: false,
// //       motionBlurOpacity: 0.5,
// //       pixelRatio: 'auto',
// //       textureOnViewport: false,
// //       style,

// //       elements,
// //     });

// //     // const animateEdges = () => {
// //     //   cy.edges().style({ "line-dash-offset": 0 });
// //     //   cy.edges().animate({
// //     //     style: {
// //     //       "line-dash-offset": -200
// //     //     },
// //     //     duration: 5000,
// //     //     complete: () => animateEdges()
// //     //   });
// //     // };

// //     // animateEdges();
// //     // debugger;

// //     return function cleanup() {
// //       if (cy) {
// //         cy.destroy();
// //       }
// //     };
// //   }, [elements]);

// //   return <div className="topology-viewer-component" ref={ref} />;
// //   // return <CytoscapeComponent elements={elements} style={ { width: '100%', height: '100%' } } layout={layout}/>;
// // }

// // Graph.propTypes = {};

// const trieSuffixArray = [
//   [
//     {
//       edge: 'a',
//       source: 'root',
//       target: 'i1',
//     },
//     {
//       edge: '$',
//       source: 'i1',
//       target: '0',
//     },
//   ],
//   [
//     {
//       edge: 'a',
//       source: 'root',
//       target: 'i1',
//     },
//     {
//       edge: 'm',
//       source: 'i1',
//       target: 'i2',
//     },
//     {
//       edge: 'a',
//       source: 'i2',
//       target: 'i3',
//     },
//     {
//       edge: '$',
//       source: 'i3',
//       target: '1',
//     },
//   ],
//   [
//     {
//       edge: 'a',
//       source: 'root',
//       target: 'i1',
//     },
//     {
//       edge: 'n',
//       source: 'i1',
//       target: 'i4',
//     },
//     {
//       edge: 'a',
//       source: 'i4',
//       target: 'i5',
//     },
//     {
//       edge: 'm',
//       source: 'i5',
//       target: 'i6',
//     },
//     {
//       edge: 'a',
//       source: 'i6',
//       target: 'i7',
//     },
//     {
//       edge: '$',
//       source: 'i7',
//       target: '2',
//     },
//   ],
//   [
//     {
//       edge: 'a',
//       source: 'root',
//       target: 'i1',
//     },
//     {
//       edge: 'n',
//       source: 'i1',
//       target: 'i4',
//     },
//     {
//       edge: 'a',
//       source: 'i4',
//       target: 'i5',
//     },
//     {
//       edge: 'n',
//       source: 'i5',
//       target: 'i8',
//     },
//     {
//       edge: 'a',
//       source: 'i8',
//       target: 'i9',
//     },
//     {
//       edge: 's',
//       source: 'i9',
//       target: 'i10',
//     },
//     {
//       edge: 'p',
//       source: 'i10',
//       target: 'i11',
//     },
//     {
//       edge: 'a',
//       source: 'i11',
//       target: 'i12',
//     },
//     {
//       edge: 'n',
//       source: 'i12',
//       target: 'i13',
//     },
//     {
//       edge: 'a',
//       source: 'i13',
//       target: 'i14',
//     },
//     {
//       edge: 'm',
//       source: 'i14',
//       target: 'i15',
//     },
//     {
//       edge: 'a',
//       source: 'i15',
//       target: 'i16',
//     },
//     {
//       edge: '$',
//       source: 'i16',
//       target: '3',
//     },
//   ],
//   [
//     {
//       edge: 'a',
//       source: 'root',
//       target: 'i1',
//     },
//     {
//       edge: 'n',
//       source: 'i1',
//       target: 'i4',
//     },
//     {
//       edge: 'a',
//       source: 'i4',
//       target: 'i5',
//     },
//     {
//       edge: 's',
//       source: 'i5',
//       target: 'i17',
//     },
//     {
//       edge: 'p',
//       source: 'i17',
//       target: 'i18',
//     },
//     {
//       edge: 'a',
//       source: 'i18',
//       target: 'i19',
//     },
//     {
//       edge: 'n',
//       source: 'i19',
//       target: 'i20',
//     },
//     {
//       edge: 'a',
//       source: 'i20',
//       target: 'i21',
//     },
//     {
//       edge: 'm',
//       source: 'i21',
//       target: 'i22',
//     },
//     {
//       edge: 'a',
//       source: 'i22',
//       target: 'i23',
//     },
//     {
//       edge: '$',
//       source: 'i23',
//       target: '4',
//     },
//   ],
//   [
//     {
//       edge: 'a',
//       source: 'root',
//       target: 'i1',
//     },
//     {
//       edge: 's',
//       source: 'i1',
//       target: 'i24',
//     },
//     {
//       edge: 'p',
//       source: 'i24',
//       target: 'i25',
//     },
//     {
//       edge: 'a',
//       source: 'i25',
//       target: 'i26',
//     },
//     {
//       edge: 'n',
//       source: 'i26',
//       target: 'i27',
//     },
//     {
//       edge: 'a',
//       source: 'i27',
//       target: 'i28',
//     },
//     {
//       edge: 'm',
//       source: 'i28',
//       target: 'i29',
//     },
//     {
//       edge: 'a',
//       source: 'i29',
//       target: 'i30',
//     },
//     {
//       edge: '$',
//       source: 'i30',
//       target: '5',
//     },
//   ],
//   [
//     {
//       edge: 'b',
//       source: 'root',
//       target: 'i31',
//     },
//     {
//       edge: 'a',
//       source: 'i31',
//       target: 'i32',
//     },
//     {
//       edge: 'n',
//       source: 'i32',
//       target: 'i33',
//     },
//     {
//       edge: 'a',
//       source: 'i33',
//       target: 'i34',
//     },
//     {
//       edge: 'n',
//       source: 'i34',
//       target: 'i35',
//     },
//     {
//       edge: 'a',
//       source: 'i35',
//       target: 'i36',
//     },
//     {
//       edge: 's',
//       source: 'i36',
//       target: 'i37',
//     },
//     {
//       edge: 'p',
//       source: 'i37',
//       target: 'i38',
//     },
//     {
//       edge: 'a',
//       source: 'i38',
//       target: 'i39',
//     },
//     {
//       edge: 'n',
//       source: 'i39',
//       target: 'i40',
//     },
//     {
//       edge: 'a',
//       source: 'i40',
//       target: 'i41',
//     },
//     {
//       edge: 'm',
//       source: 'i41',
//       target: 'i42',
//     },
//     {
//       edge: 'a',
//       source: 'i42',
//       target: 'i43',
//     },
//     {
//       edge: '$',
//       source: 'i43',
//       target: '6',
//     },
//   ],
//   [
//     {
//       edge: 'm',
//       source: 'root',
//       target: 'i44',
//     },
//     {
//       edge: 'a',
//       source: 'i44',
//       target: 'i45',
//     },
//     {
//       edge: '$',
//       source: 'i45',
//       target: '7',
//     },
//   ],
//   [
//     {
//       edge: 'n',
//       source: 'root',
//       target: 'i46',
//     },
//     {
//       edge: 'a',
//       source: 'i46',
//       target: 'i47',
//     },
//     {
//       edge: 'm',
//       source: 'i47',
//       target: 'i48',
//     },
//     {
//       edge: 'a',
//       source: 'i48',
//       target: 'i49',
//     },
//     {
//       edge: '$',
//       source: 'i49',
//       target: '8',
//     },
//   ],
//   [
//     {
//       edge: 'n',
//       source: 'root',
//       target: 'i46',
//     },
//     {
//       edge: 'a',
//       source: 'i46',
//       target: 'i47',
//     },
//     {
//       edge: 'n',
//       source: 'i47',
//       target: 'i50',
//     },
//     {
//       edge: 'a',
//       source: 'i50',
//       target: 'i51',
//     },
//     {
//       edge: 's',
//       source: 'i51',
//       target: 'i52',
//     },
//     {
//       edge: 'p',
//       source: 'i52',
//       target: 'i53',
//     },
//     {
//       edge: 'a',
//       source: 'i53',
//       target: 'i54',
//     },
//     {
//       edge: 'n',
//       source: 'i54',
//       target: 'i55',
//     },
//     {
//       edge: 'a',
//       source: 'i55',
//       target: 'i56',
//     },
//     {
//       edge: 'm',
//       source: 'i56',
//       target: 'i57',
//     },
//     {
//       edge: 'a',
//       source: 'i57',
//       target: 'i58',
//     },
//     {
//       edge: '$',
//       source: 'i58',
//       target: '9',
//     },
//   ],
//   [
//     {
//       edge: 'n',
//       source: 'root',
//       target: 'i46',
//     },
//     {
//       edge: 'a',
//       source: 'i46',
//       target: 'i47',
//     },
//     {
//       edge: 's',
//       source: 'i47',
//       target: 'i59',
//     },
//     {
//       edge: 'p',
//       source: 'i59',
//       target: 'i60',
//     },
//     {
//       edge: 'a',
//       source: 'i60',
//       target: 'i61',
//     },
//     {
//       edge: 'n',
//       source: 'i61',
//       target: 'i62',
//     },
//     {
//       edge: 'a',
//       source: 'i62',
//       target: 'i63',
//     },
//     {
//       edge: 'm',
//       source: 'i63',
//       target: 'i64',
//     },
//     {
//       edge: 'a',
//       source: 'i64',
//       target: 'i65',
//     },
//     {
//       edge: '$',
//       source: 'i65',
//       target: '10',
//     },
//   ],
//   [
//     {
//       edge: 'p',
//       source: 'root',
//       target: 'i66',
//     },
//     {
//       edge: 'a',
//       source: 'i66',
//       target: 'i67',
//     },
//     {
//       edge: 'n',
//       source: 'i67',
//       target: 'i68',
//     },
//     {
//       edge: 'a',
//       source: 'i68',
//       target: 'i69',
//     },
//     {
//       edge: 'm',
//       source: 'i69',
//       target: 'i70',
//     },
//     {
//       edge: 'a',
//       source: 'i70',
//       target: 'i71',
//     },
//     {
//       edge: '$',
//       source: 'i71',
//       target: '11',
//     },
//   ],
//   [
//     {
//       edge: 's',
//       source: 'root',
//       target: 'i72',
//     },
//     {
//       edge: 'p',
//       source: 'i72',
//       target: 'i73',
//     },
//     {
//       edge: 'a',
//       source: 'i73',
//       target: 'i74',
//     },
//     {
//       edge: 'n',
//       source: 'i74',
//       target: 'i75',
//     },
//     {
//       edge: 'a',
//       source: 'i75',
//       target: 'i76',
//     },
//     {
//       edge: 'm',
//       source: 'i76',
//       target: 'i77',
//     },
//     {
//       edge: 'a',
//       source: 'i77',
//       target: 'i78',
//     },
//     {
//       edge: '$',
//       source: 'i78',
//       target: '12',
//     },
//   ],
// ];

// function SuffixTree() {
//   const [elements, setElements] = useState({ nodes: [], edges: [] });
//   const [indexes, setIndexes] = useState({ i: 0, j: 0 });
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const { i, j } = indexes;

//       const { edge, source, target } = trieSuffixArray[i][j];
//       const { nodes, edges } = elements;
//       const edgesFormated =
//         edges.length === 0
//           ? {}
//           : edges.reduce(
//             (previousValue, currentValue) => ({
//               ...previousValue,
//               [currentValue.data.id]: {
//                 ...currentValue,
//                 classes: 'inactive',
//               },
//             }),
//             {},
//           );
//       edgesFormated[`${source}-${target}`] = {
//         data: {
//           source,
//           target,
//           label: edge,
//           id: `${source}-${target}`,
//         },
//         classes: 'active',
//       };
//       setElements({
//         nodes: [
//           ...nodes,
//           { data: { id: source, label: source } },
//           { data: { id: target, label: target } },
//         ],
//         edges: Object.values(edgesFormated),
//         // [
//         //   ...edges.map((edge) => ({ ...edge, classes: "" })),
//         //   {
//         //     data: { source, target, label: edge, id: `${source}-${target}` },
//         //     classes: "switch blue",
//         //   },
//         // ],
//       });
//       if (j === trieSuffixArray[i].length - 1 && i === trieSuffixArray.length) {
//         clearTimeout(timeout);
//         return;
//       }
//       if (j === trieSuffixArray[i].length - 1) {
//         setIndexes({ i: i + 1, j: 0 });
//         return;
//       }
//       setIndexes({ i, j: j + 1 });
//     }, 3000);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [indexes]);

//   const ref = useRef(null);
//   useEffect(() => {
//     const cy = cytoscape({
//       container: ref.current,
//       boxSelectionEnabled: false,
//       autounselectify: true,
//       layout: {
//         name: 'dagre',
//         ...defaults,
//       },
//       zoom: 1,
//       pan: { x: 0, y: 0 },
//       minZoom: 0.1,
//       maxZoom: 5,
//       wheelSensitivity: 0.1,
//       motionBlur: false,
//       motionBlurOpacity: 0.5,
//       pixelRatio: 'auto',
//       textureOnViewport: false,
//       style,
//       elements,
//     });

//     return function cleanup() {
//       if (cy) {
//         cy.destroy();
//       }
//     };
//   }, [elements]);

//   return <div className="topology-viewer-component" ref={ref} />;
// }

// export default SuffixTree;
