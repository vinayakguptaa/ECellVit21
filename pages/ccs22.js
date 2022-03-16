import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tech from '../components/ccs/technical';
import Management from '../components/ccs/management';
import Design from '../components/ccs/design';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
            <div style={{ textAlign: "center" }}>
                <h1>Welcome to Entrepreneurship Cell</h1>
                <h3>Core Committee Selections 2022</h3>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab sx={{ color: 'white' }} label="Technical" {...a11yProps(0)} />
                        <Tab sx={{ color: 'white' }} label="Management" {...a11yProps(1)} />
                        <Tab sx={{ color: 'white' }} label="Design" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Tech />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Management />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Design />
                </TabPanel>
            </Box>
        </ThemeProvider>
    );
}