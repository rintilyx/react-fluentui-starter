import {Nav, Panel} from "@fluentui/react";
import React, {useEffect} from "react";

function SideNavComponent(props) {

    useEffect(() => {
        console.log('sideNavTHemeChanged: ', props.theme)
    }, [props.theme]);

    const navStyles = {
        root: {
            overflowY: 'auto'
        },
    };

    const navLinkGroups = [
        {
            links: [
                {
                    name: 'HomePage',
                    icon: 'Home',
                    key: 'keyHome',
                    url: '/',
                },
                {
                    name: 'Parent',
                    key: 'keyParent',
                    expandAriaLabel: 'Expand Parent section',
                    collapseAriaLabel: 'Collapse Parent section',
                    links: [
                        {
                            name: 'Child 1',
                            url: '/',
                            key: 'keyChild1',
                        },
                        {
                            name: 'Child 2',
                            url: '/',
                            key: 'keyChild2',
                        },
                    ],
                    isExpanded: false,
                }
            ],
        },
    ];

    const onLinkClick = (ev) => {
        console.log('link clicked: ', ev);
    }

    return (
        <Panel
            isLightDismiss
            isOpen={props.opened}
            onDismiss={() => props.onChange('SideNavOpenMenu', false)}
            closeButtonAriaLabel="Close"
            type={2}
            isBlocking={false}
            headerText="Menù"
        >
            <Nav
                onLinkClick={onLinkClick}
                selectedKey="key3"
                ariaLabel="Nav basic example"
                styles={navStyles}
                groups={navLinkGroups}
            />


        </Panel>
    )

}

export default SideNavComponent;