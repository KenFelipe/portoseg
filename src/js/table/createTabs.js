// criar abas(tabs) que seleciona Table 
// atraves de dados configurado em 'config/data.js'

function createTabs() {
    const tabClass = CLASSNAME.tab
    const tabBarClass = CLASSNAME.tabBar

    const tabBarsContainer = document.getElementById(ID.tabBarContainer)

    Object.keys(DATA).forEach(tableName => {
        // se dados for configurado pra table
        // logica sobre "bar" esta no "js/rangebar/"
        if(DATA[tableName].type === "table") {
            const tabBar = document.createElement('div')
            tabBar.classList.add(tabBarClass)

            Object.keys(DATA[tableName].table).forEach(tabName => {
                const tab = document.createElement('button')
                tab.classList.add(tabClass)

                const span = document.createElement('span')
                span.innerHTML = tabName

                // ***************************************************
                // PRECISA INSERIR LOGICA PARA
                // PROCESSAMENTO DE TEXT APOS DA <SPAN> 
                // (LABEL DO TAB)
                // ***************************************************

                tab.appendChild(span)
                tabBar.appendChild(tab)
            })

            tabBarsContainer.appendChild(tabBar)
        }
    })
}