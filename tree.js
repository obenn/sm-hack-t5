const node1bulkresult = [
    {
        collapsed: true,
        text: {
            name: "Use Snyk IDE plug-in if supported! Otherwise, use CLI and export a SARIF, then use it with a SARIF viewer extension in the IDE"
        }
    },
    {
        collapsed: true,
        text: {
            name: "Supported IDEs are",
        },
        children: [
            {
                collapsed: false,
                text: {name: "Jetbrains (IntelliJ, WebStorm, Pycharm, Android studio, etc): Snyk Open Source and Snyk Code"},
            },
            {
                collapsed: false,
                text: {name: "Visual Studio Code: Code only (there is a “community” barebones option for Snyk Open Source called Snyk VulnCost)"},
            },
            {
                collapsed: false,
                text: {name: "Eclipse: Snyk Open Source only"},
            },
            {
                collapsed: false,
                text: {name: "Visual Studio (full): Snyk Open Source only"},
            },
        ],
    },
    {
        collapsed: true,
        text: {
            name: "Also, PR Checks via Git integration may help as they provide visibility for Snyk Open Source and Snyk Code prior to the code being merged",
        },
    },
]


var chart_config = {
    chart: {
        container: "#collapsable-example",
        rootOrientation: "WEST",

        animateOnInit: false,
        hideRootNode: false,
        connectors: {type: "curve"},
        
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
                collapsed: true,
                text: {
                    title: "Developer desktop",
                    responsible: "Responsible: Developers",
                    accountable: "Accountable: Developers",
                },
                children: [
                    {
                        collapsed: true,
                        text: {
                            name: "Pick secure open source packages so I don’t have to redo a bunch of work",
                        },
                        children: [
                            {
                                link: {href: "https://snyk.io/advisor"},
                                text: {name: "Check out https://snyk.io/advisor!"}
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Reduce pressure/schooling received from security or legal",
                        },
                        collapsed: true,
                        children: node1bulkresult,
                    },
                    {
                        text: {
                            name: "Catch issues early and fix them before they become a part of the codebase",
                        },
                        collapsed: true,
                        children: node1bulkresult,
                    },
                    {
                        text: {
                            name: "Ensure that code commit will pass through the security gate the first time",
                        },
                        collapsed: true,
                        children: node1bulkresult,
                    },
                ]
            },
            {
                text: {
                    title: "Git integrations",
                    responsible: "Responsible: AppSec",
                    accountable: "Accountable: Developers",
                },
                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Easy & quick on-boarding to understand overall risk posture (e.g. visibility & reporting",
                        }
                    },
                    {
                        text: {
                            name: "Monitoring vulnerabilities over time, including 0-days"
                        }
                    },
                    {
                        text: {
                            name: "Easy centralized way to action vulnerabilities (automated or manual fixes)",
                        }
                    },
                    {
                        text: {
                            name: "Early detection of issues pre-merge (in PR tests)",
                        }
                    },

                ]
            },
            {
                text: {
                    title: "CI/CD integration",
                    responsible: "Responsible: DevOps",
                    accountable: "Accountable: AppSec/DevSecOps, Developers",
                },
                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Check for issues and optionally block deployments",
                        }
                    },
                    {
                        text: {
                            name: "Capture & track dependency details over time (e.g. monitor)",
                        }
                    },
                    {
                        text: {
                            name: 'Generate “paper trail”',
                        }
                    },
                    {
                        text: {
                            name: "Triage/remediate discovered issues",
                        }
                    },

                ]
            },
            {
                text: {
                    title: "SecOps/SRE (production code)",
                    responsible: "Responsible: SRE, Incident Response, SOC managers",
                    accountable: "Accountable: Security Analysts, Developers, Management",
                },
                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Monitor infrastructure & maintain reliability of the production environment (incl 0-days)",
                        }
                    },
                    {
                        text: {
                            name: "Understand & respond to vulnerabilities based on risk (not just severity) - e.g. prioritize and submit to engineering to fix",
                        }
                    },
                    {
                        text: {
                            name: "Prevent exploits and attacks on running systems",
                        }
                    },
                ]
            },
            {
                text: {
                    title: "Issue Management",
                    responsible: "Responsible: SRE, Incident Response, SOC managers",
                    accountable: "Accountable: Security Analysts, Developers, Management",
                },
                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Prioritize issues that need to be fixed and their respective SLAs based on a policy",
                        }
                    },
                    {
                        text: {
                            name: "Sync with an external system to trigger and track fixes (JIRA, fix PRs)",
                        }
                    },
                    {
                        text: {
                            name: "Validate that the fix worked (within SLA)",
                        }
                    },
                    {
                        text: {
                            name: 'Approve acceptance of certain risks (“ignore workflow”)',
                        }
                    },
                    {
                        text: {
                            name: 'Audit accepted risks and be able to expire “acceptance” (don’t let accepted risk accumulate)',
                        }
                    },
                ]
            },
            {
                text: {
                    title: "Legal, Governance and Compliance",
                    responsible: "Responsible: SRE, Incident Response, SOC managers",
                    accountable: "Accountable: Security Analysts, Developers, Management",
                },
                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Ensure no dependencies with non-compliant licenses reach the production environment, which may put the organization at legal risk",
                        }
                    },
                    {
                        text: {
                            name: "Track & manage inventory, licenses, issue details and approval trail for each release",
                        }
                    },
                    {
                        text: {
                            name: "Understand impact of Snyk on the devOps process (ROI)",
                        }
                    },
                    {
                        text: {
                            name: "Include in broader reporting (feed Snyk data to GRC/SIEM - RSA Archer, Splunk, etc)",
                        }
                    },
                    {
                        text: {
                            name: "Help satisfy requirements of a particular compliance standard (e.g. PCI)",
                        }
                    },

                ]
            },
        ]
    }
};
