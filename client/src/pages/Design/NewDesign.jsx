import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';


import WireframeForm from '../../components/NewDesignForm';
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import Auth from "../../utils/auth"
import {
  DesignContainer,
  DesignDetailsContainer,
  DesignTitle,
} from "./DesignStyle";

const NewWireframeForm = () => {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <Navigate to="/" />
  }
  return (
    <>
      <Header />
      <DesignContainer>
        <DesignDetailsContainer>
          <DesignTitle>Create Your Design</DesignTitle>
            <WireframeForm />
        </DesignDetailsContainer>
      </DesignContainer>
      <Footer/>
    </>
  );
};

export default NewWireframeForm;
