import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';


export default function EventsTab(props) {
  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 'lg',
        boxShadow: 'sm',
        overflow: 'auto',
        margin: '10px 0'
      }}
    >
      <Tabs
      aria-label="Activities"
      defaultValue={0}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: 'sm',
            fontWeight: 'lg',
            [`&[aria-selected="true"]`]: {
              color: 'primary.500',
              bgcolor: 'background.surface',
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-4px',
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Activities
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Scheduled
        </Tab>

      </TabList>
      <TabPanel value={0}>
        <Typography level="inherit">
          Here goes the listed events
        </Typography>
        
      </TabPanel>
      <TabPanel value={1}>
        <Typography level="inherit">
          Here goes the scheduled transactions
        </Typography>
        
      </TabPanel>
      
    </Tabs>

    </Card>
    
  );
}