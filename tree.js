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
