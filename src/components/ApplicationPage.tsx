import * as React from 'react';

export const ApplicationPage: React.FC<ApplicationPageProps> = (props) => {
//  const { t } = useTranslation();
  const filters = [
    {
      filterGroupName: t('public~Status'),
      type: 'cluster-operator-status',
  //    reducer: getClusterOperatorStatus,
      items: [
        { id: 'Available', title: t('public~Available') },
        { id: 'Progressing', title: t('public~Progressing') },
        { id: 'Degraded', title: t('public~Degraded') },
        { id: 'Cannot update', title: t('public~Cannot update') },
        { id: 'Unavailable', title: t('public~Unavailable') },
        { id: 'Unknown', title: t('public~Unknown') },
      ],
    },
  ];
  return (
    <>
      <UpdateInProgressAlert cv={props.cv} />
      <ListPage
        {...props}
        title={ClusterOperatorModel.labelPlural}
        kind={clusterOperatorReference}
        ListComponent={ClusterOperatorList}
        canCreate={false}
        rowFilters={filters}
      />
    </>
  );
};

type ApplicationPageProps = {
//  cv: ClusterVersionKind;
  autoFocus?: boolean;
  showTitle?: boolean;
};