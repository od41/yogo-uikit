import React from 'react'
import { Page } from '@root/components/layout/Page'
import {
    useColorModeValue,
    VStack,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    TabIndicator,
  } from "@chakra-ui/react";
import { OverviewTab } from '@root/components/layout/pages/projects/OverviewTab';
import { TargetsTab } from '@root/components/layout/pages/projects/TargetsTab';
import { BudgetTab } from '@root/components/layout/pages/projects/BudgetTab';
import { UsersTab } from '@root/components/layout/pages/projects/UsersTab';
import { FilesTab } from '@root/components/layout/pages/projects/FilesTab';
import { ActivityTab } from '@root/components/layout/pages/projects/ActivityTab';
import { SettingsTab } from '@root/components/layout/pages/projects/SettingsTab';

const ProjectDetails = () => {
  return (
    <>
      <Page>
        <VStack w="100%" spacing={6} alignItems="flex-start" >
          <Tabs w="100%" variant="line" colorScheme={"black"}>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Targets</Tab>
              <Tab>Budget</Tab>
              <Tab>Users</Tab>
              <Tab>Files</Tab>
              <Tab>Activity</Tab>
              <Tab>Settings</Tab>
            </TabList>
            {/* <TabIndicator mt="0px" height="2px" bg="brand.primary.alpha" /> */}
            <TabPanels>
              <TabPanel px={0}>
                <OverviewTab />
              </TabPanel>

              <TabPanel px={0}>
                <TargetsTab />
              </TabPanel>

              <TabPanel px={0}>
                <BudgetTab />
              </TabPanel>

              <TabPanel px={0}>
                <UsersTab />
              </TabPanel>

              <TabPanel px={0}>
                <FilesTab />
              </TabPanel>

              <TabPanel px={0}>
                <ActivityTab />
              </TabPanel>

              <TabPanel px={0}>
                <SettingsTab />
              </TabPanel>

            </TabPanels>

            
          </Tabs>
        </VStack>
      </Page>
    </>
  );
}

export default ProjectDetails