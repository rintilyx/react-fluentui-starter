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
                    name: 'Dashboard',
                    icon: 'GoToDashboard',
                    url: '/',
                    key: 'keyDashboard',
                },
                {
                    name: 'Events',
                    icon: 'Mail',
                    key: 'keyEvents',
                    url: '/'
                },
                {
                    name: 'Testing',
                    icon: 'TestBeaker',
                    key: 'keyTesting',
                    expandAriaLabel: 'Expand Testing section',
                    collapseAriaLabel: 'Collapse Testing section',
                    links: [
                        {
                            name: 'Scenarios',
                            url: '/',
                            key: 'keyScenarios',
                        },
                        {
                            name: 'Execution',
                            url: '/',
                            key: 'keyExecution',
                        },
                    ],
                    isExpanded: false,
                },
                {
                    name: 'Reference Data',
                    key: 'keyReferenceData',
                    icon: 'MasterDatabase',
                    expandAriaLabel: 'Expand Reference Data section',
                    collapseAriaLabel: 'Collapse Reference Data section',
                    links: [
                        {
                            name: 'Location',
                            url: '/',
                            key: 'keyLocation',
                        },
                        {
                            name: 'Supplier',
                            url: '/',
                            key: 'keySupplier',
                        },
                        {
                            name: 'Product',
                            url: '/',
                            key: 'keyProduct',
                        },
                        {
                            name: 'Supplier Catalog',
                            url: '/',
                            key: 'keySupplierCatalog',
                        },
                    ],
                    isExpanded: false,
                },
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