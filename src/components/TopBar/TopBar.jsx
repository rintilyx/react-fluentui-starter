import React from 'react';
import {CommandButton, IconButton, Label, Stack} from "@fluentui/react";
import {useConst} from "@fluentui/react-hooks";


const stackTokens = { childrenGap: 15 };
const menuIcon = { iconName: 'CollapseMenu' };
const colorIcon = { iconName: 'Color' };

function TopBarComponent(props) {

    let theme = props.theme;

    const styles = {
        root: {
            width: '100%',
            backgroundColor: theme.palette.themePrimary,
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            color: theme.palette.themeLighterAlt + "!important",
            padding: '0 auto',
            height: 43
        }
    };

    const menuButtonStyles = {
        root: {
            color: theme.palette.themeLighterAlt,
            paddingLeft: '10%',
            width: '40%',
            height: 43
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        rootFocused: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        rootPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        }
    };

    const themeSelectorStyles = {
        root: {
            color: theme.palette.themeLighterAlt,
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        rootFocused: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        rootPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        label: {
            color: theme.palette.themeLighterAlt
        },
        labelHovered: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        labelFocused: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        labelPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        icon: {
            color: theme.palette.themeLighterAlt
        },
        iconHovered: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        iconFocused: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        iconPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        menuIcon: {
            color: theme.palette.themeLighterAlt
        },
        menuIconHovered: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        menuIconFocused: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        },
        menuIconPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.themeLighterAlt
        }
    }

    const menuProps = useConst(() => ({
            items: [
                { key: 'lightTheme', text: 'Light Theme', onClick: () => props.onChange('DarkMode', false) },
                { key: 'darkTheme', text: 'Dark Theme', onClick: () => props.onChange('DarkMode', true) },
            ]
        })
    );


    return (
        <Stack verticalAlign="center" styles={styles} tokens={stackTokens}>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm1" style={{marginLeft: '-1%'}} align="left">
                        <IconButton styles={menuButtonStyles} iconProps={menuIcon} onClick={() => props.onChange('OpenMenu', true)} title="Menu" ariaLabel="Menu" />
                    </div>
                    <div className="ms-Grid-col ms-sm8" style={{ paddingTop: 6.5, marginLeft: '-5%', marginRight: '5%' }}>
                        <Label style={{ color: theme.palette.themeLighterAlt }}>Black Hat - Utility Tool</Label>
                    </div>
                    <div className="ms-Grid-col ms-sm3" style={{ paddingTop: 3 }} align="right">
                        <CommandButton styles={themeSelectorStyles} iconProps={colorIcon} text="Theme" menuProps={menuProps} />
                    </div>
                </div>
            </div>
        </Stack>
    );
}

export default TopBarComponent;