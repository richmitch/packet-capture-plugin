import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import { HorizontalNav } from '@openshift-console/dynamic-plugin-sdk';
import './example.css';

export default function PacketCapturePage() {

  const Disclaimer: React.FC = () => (
    <div>
      <TextContent>
        <Text component="p">
          This is a custom page contributed by Red Hat Consulting based on the console plugin template.  
          It is not part of the OpenShift product and it and the source code is not supported by Red Hat.
        </Text>        
        <Text component="p">
          This page displays the status of currently deployed Packet Capture jobs running against Nokia CNF applications.
        </Text>
      </TextContent><h1>This will show a table of Applications that have Packet Capture deployed</h1>
    </div>
  );

  const Applications: React.FC = () => (
    <div>
      <h1>This will show a table of Applications that have Packet Capture deployed</h1>
    </div>
  );
  
  const Captures: React.FC = () => (
    <div>
      <h1>This will show a table of Packet Capture instances and their status</h1>
    </div>
  );

  const Storage: React.FC = () => (
    <div>
      <h1>This will show cards showing the current capacity and usage of the storage used by the Packet Capture</h1>
    </div>
  );

  const pages = [
    {
      href: 'applications',
      name: 'Applications',
      component: Applications,
    },
    {
      href: 'captures',
      name: 'Captures',
      component: Captures,
    },
    {
      href: 'storage',
      name: 'Storage',
      component: Storage,
    },
    {
      href: 'disclaimer',
      name: 'Disclaimer',
      component: Disclaimer,
    }
  ];  

  return (
    <>
      <Helmet>
        <title data-test="example-page-title">Packet Capture</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">Packet Capture</Title>
        </PageSection>
        <PageSection variant="light">
          <HorizontalNav pages={pages} />
        </PageSection>
      </Page>
    </>
  );
}
