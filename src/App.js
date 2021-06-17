import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Header from './Header';
import Header2 from './Header2';
import Cards from './Cards';

const themeLight = createMuiTheme({
    palette: {
        background: {
            default: '#D3D3D3',
        },
        text: {
            secondary: '#000000DE',
        },
    },
});

const themeDark = createMuiTheme({
    palette: {
        background: {
            default: '#002984',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});

const App = () => {
    const [light, setLight] = React.useState(true);
    return (
        <MuiThemeProvider theme={light ? themeLight : themeDark}>
            <CssBaseline />
            <Button
                onClick={() => setLight((prev) => !prev)}
                variant="outlined"
            >
                TOGGLE
            </Button>
            <Header2 />
            <Cards />
        </MuiThemeProvider>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
