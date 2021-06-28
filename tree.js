    var chart_config = {
        chart: {
            container: "#collapsable-example",
            rootOrientation: "WEST",

            animateOnInit: false,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 100,
                connectorsAnimation: "bounce",
                connectorsSpeed: 100
            }
        },
        nodeStructure: {
            collapsed: false,
            image: "https://snyk.io/wp-content/themes/snyk_v2_etyhadar/dist/images/svg/snyk-logo-new_hp.svg",
            text: {
                name: "Welcome",
            },
            children: [
                {
                    text: {name: "Developer desktop"},
                    children: [
                        {
                            text: {
                                category: "Category",
                                name: "Child",
                            }
                        },
                    ]
                },
                {
                    text: {name: "Git integrations"}
                },
                {
                    text: {name: "CI/CD integration"}
                },
                {
                    text: {name: "SecOps/SRE (production code)"}
                },
                {
                    text: {name: "Issue Management"}
                },
                {
                    text: {name: "Legal, Governance and Compliance"}
                },
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/
