// aplicar funcao "onclick" em tablesSelectButtons.
function initTsButtonsClickEvent() {
    // table select Buttons
    const tsButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton)

    for(let i = 0; i < tsButtons.length; i++) {
        tsButtons.item(i).addEventListener('click', toggleTsButtonsActive) 
        tsButtons.item(i).addEventListener('click', removeRbButtonsActive) 
        tsButtons.item(i).addEventListener('click', activeTabBarBottomBar) 

        // ***************************************************
        // n de tsButtons = n de tabBar = n de tablesSections
        // ***************************************************
        function toggleTsButtonsActive() {
            const tabBars = document.getElementsByClassName(CLASSNAME.tabBar)
            const tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection)

            // atribui class ".active" no botao clicado,
            // no tabBar e no tables_section respectivo(que corresponde mesmo index)
            // e remove .active de outros btn, tabBar e tbls_section.
            for(let target = 0; target < tsButtons.length; target++) {
                // nao vai remover classe do proprio elemento clicado
                // e dos elementos de mesmo index.
                if(target === i) {
                    continue
                }
                tsButtons.item(target).classList.remove('active')

                tabBars.item(target).classList.remove('active')
                tablesSections.item(target).classList.remove('active')
            }
            tsButtons.item(i).classList.add('active')

            tabBars.item(i).classList.add('active')
            tablesSections.item(i).classList.add('active')
        }

        function removeRbButtonsActive() {
            const showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton)

            for(let target = 0; target < showRbButtons.length; target++) {
                showRbButtons.item(target).classList.remove('active')
            }
        }

        function activeTabBarBottomBar() {
            // !!!!!!!!!!!!!!! change to active !!!!!!!!!!!!!!!!
            // remover .disable pra exibir bottom bar do tabBar
            document.getElementById('tabbar-border-bottom').classList.remove('disable')
        }
    }
}
