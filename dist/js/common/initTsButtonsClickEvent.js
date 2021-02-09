"use strict";

// aplicar funcao "onclick" em tablesSelectButtons.
function initTsButtonsClickEvent() {
  // table select Buttons
  var tsButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton);

  var _loop = function _loop(i) {
    tsButtons.item(i).addEventListener('click', toggleTableElementsActive);
    tsButtons.item(i).addEventListener('click', activeTabBarBottomBar);
    tsButtons.item(i).addEventListener('click', removeRbButtonsActive);
    tsButtons.item(i).addEventListener('click', disableRangeBar); // ***************************************************
    // n de tsButtons = n de tabBar = n de tablesSections
    // ***************************************************

    function toggleTableElementsActive() {
      var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
      var tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection); // atribui class ".active" no botao clicado,
      // no tabBar e no tables_section respectivo(que corresponde mesmo index)
      // e remove .active de outros btn, tabBar e tbls_section.

      for (var target = 0; target < tsButtons.length; target++) {
        // nao vai remover classe do proprio elemento clicado
        // e dos elementos de mesmo index.
        if (target === i) {
          continue;
        }

        tsButtons.item(target).classList.remove('active');
        tabBars.item(target).classList.remove('active');
        tablesSections.item(target).classList.remove('active');
      }

      tsButtons.item(i).classList.add('active');
      tabBars.item(i).classList.add('active');
      tablesSections.item(i).classList.add('active');
    }

    function activeTabBarBottomBar() {
      var tabBarBottomBar = document.getElementById(ID.tabBarBottomBar);
      tabBarBottomBar.classList.add('active');
    }

    function removeRbButtonsActive() {
      var showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton);

      for (var target = 0; target < showRbButtons.length; target++) {
        showRbButtons.item(target).classList.remove('active');
      }
    }

    function disableRangeBar() {
      var rangeBarContainer = document.getElementById('range-container');
      rangeBarContainer.classList.remove('active');
    }
  };

  for (var i = 0; i < tsButtons.length; i++) {
    _loop(i);
  }
}