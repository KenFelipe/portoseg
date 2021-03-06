"use strict";

/* ******************* Configurar os dados das tabelas aqui ************************ */

/* Formato */
// const DATA = { 
//     "nome_do_botao": {           *nome do botao nao pode repetir*
//         "nome_da_aba(tab)": {    *nome da aba nao pode repetir dentro de mesmo botao*
//             head: [ ... ],
//             body: [
//                 [ ... ],
//                 [ ... ],
//                 [ ... ], ...
//             ]
//         },
//     }, ...
// }
var DATA = {
  // "test": { type: "table", table: { "Ate 580mil": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ], }, } },
  "TEST3": {
    type: "bar",
    bar: {
      parcela: {
        step: 1,
        min: 100000,
        max: 500000,
        formulas: [{
          min: 100000,
          max: 200000,
          formula: "(x * (16.5 / 100) + x) / 200 + (x * (16.5 / 100) + x) * (0.031 / 100)"
        }, {
          min: 200001,
          max: 500000,
          formula: "(x * (16.5 / 100) + x) / 200 + (x * (16.5 / 100) + x) * (0.031 / 100)"
        }]
      },
      credito: {
        min: 100,
        max: 500,
        step: 1,
        formulas: [{
          min: 100,
          max: 200,
          formula: "x * 1"
        }, {
          min: 201,
          max: 500,
          formula: "x * 10000"
        }]
      }
    }
  },
  "automovel": {
    type: "table",
    bar: {
      parcela: {
        min: 1000,
        max: 50000,
        step: 1,
        formula: "x / 1000"
      },
      credito: {
        min: 100,
        max: 4000,
        step: 1,
        formula: "x * 100"
      }
    },
    table: {
      "Ate 580mil": {
        head: ["500mil", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      }
    }
  },
  "imovel": {
    type: "table",
    table: {
      "Ate 240mil": {
        head: ["thead", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      },
      "Ate 580mil": {
        head: ["500mil", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      }
    }
  },
  "rangeBar2": {
    type: "bar",
    bar: {
      parcela: {
        min: 0,
        max: 100,
        step: 1,
        formulas: [{
          min: 0,
          max: 50,
          formula: "x * 1"
        }, {
          min: 51,
          max: 100,
          formula: "x * 10"
        }]
      },
      credito: {
        min: 44,
        max: 444,
        step: 1,
        formulas: [{
          min: 44,
          max: 200,
          formula: "x * 1"
        }, {
          min: 201,
          max: 444,
          formula: "x * 2"
        }]
      }
    }
  },
  "POSTEST": {
    type: "table",
    table: {
      "Ate 240mil": {
        head: ["thead", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      },
      "Ate 580mil": {
        head: ["500mil", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      },
      "A": {
        head: ["500mil", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      },
      "B": {
        head: ["501mil", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      },
      "2 145": {
        head: ["500mil", "thead"],
        body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
      } // "3 1453": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], },

    }
  },
  "tabletest": {
    type: "table",
    table: {
      "FLEX50MESES": {
        head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
        body: [["Cobalt_LTZ_1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"]]
      }
    }
  } // "TEST5": {
  //     type: "bar",
  //     bar: {
  //         parcela: {
  //             min: 5555,
  //             max: 55555,
  //             step: 1,
  //             formula: "x / 1000"
  //         },
  //         credito: {
  //             min: 55,
  //             max: 555,
  //             step: 1,
  //             formula: "x * 100"
  //         }
  //     },
  // }

}; // const DATA = { 
// "automovel": {
// type: "bar",
// bar: {
// parcela: {
// min: 1000,
// max: 50000,
// step: 1,
// formula: "x / 1000"
// },
// credito: {
// min: 100,
// max: 4000,
// step: 1,
// formula: "x * 100"
// }
// },
// table: {
//         "FLEX50MESES": {
//             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
//             body: [
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//             ]
//         },
//         "2 50MESES": {
//             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
//             body: [
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//             ]
//         },
//         "3 50MESES": {
//             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
//             body: [
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//             ]
//         },
//         "250MESES": {
//             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
//             body: [
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
//                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"]
//             ]
//         }
//     // }
// },
// "imovel": {
//     "Ate 240mil": {
//         head: ["thead", "thead"],
//         body: [ 
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//         ],
//     },
//     "Ate 580mil": {
//         head: ["500mil", "thead"],
//         body: [
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//         ],
//     },
//     "Ate 100mil": {
//         head: ["1000mil", "thead"],
//         body: [
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//             ["R$55.000,00", "R$349.00"],
//         ]
//     },
// },
// "test": {
//     "tab1": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab2": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab3": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab4": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab5": { head: [1, 3, 4], body: [[11, 22, 33]] },
// },
// "test2": {
//     "tab1": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab2": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab3": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab4": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab6": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     "tab7": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     // "tab8": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     // "tab9": { head: [1, 3, 4], body: [[11, 22, 33]] },
//     // "tab10": { head: [1, 3, 4], body: [[11, 22, 33]] },
// },
// "TEST2": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// "TEST3": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// "TEST4": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// "TEST5": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// "TEST6": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// "TEST7": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// }