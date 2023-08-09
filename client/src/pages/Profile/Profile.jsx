import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import NewDesignForm from '../../components/NewDesignForm';
import WireframeList from '../../components/DesignList';
import Header from "../../components/Header"

import { QUERY_USER, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import { DesignListContainer, ProfileContainer, ProfileTitle } from './ProfileStyle';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log("data", data);

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("user", user);

  if (!user?.username) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Header />
        <ProfileContainer>
        <ProfileTitle>
        {`${user.username}'s`} Saved Designs
        </ProfileTitle>
        <DesignListContainer>
          
          <WireframeList
            wireframes={user.wireframes}
            title={`${user.username}'s wireframes...`}
            showTitle={false}
            showUsername={false}
          />
          </DesignListContainer>
        </ProfileContainer>
    </>
  );
};

export default Profile;
