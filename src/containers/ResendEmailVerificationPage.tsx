import React from 'react';
import { connect } from 'react-redux';
import PageLayout from './PageLayout';

import ResendEmailVerificationPage from '../components/ResendEmailVerificationPage';

interface ResendEmailVerificationContainerProps {
  user: {
    profile: {
      email: string;
    };
  };
}

const ResendEmailVerificationContainer: React.FC<ResendEmailVerificationContainerProps> = (
  props,
) => {
  const { user } = props;

  return (
    <PageLayout>
      <ResendEmailVerificationPage email={user.profile.email} />
    </PageLayout>
  );
};

const mapStateToProps = (state: { [key: string]: any }) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(ResendEmailVerificationContainer);
