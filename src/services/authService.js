/* eslint-disable no-unused-vars */
import { CONST } from '../../constants.js';
// import Vue from 'vue';
// export const eventBus = new Vue();
// import store from '../store/index';

import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoRefreshToken,
} from 'amazon-cognito-identity-js';

const POOL_DATA = {
  UserPoolId: CONST.USERPOOL_ID,
  ClientId: CONST.CLIENT_ID,
};
const userPool = new CognitoUserPool(POOL_DATA);

export function signUp(user) {
  const { username, password, email } = user;

  let attributeList = [];

  const dataEmail = {
    Name: 'email',
    Value: email,
  };

  var attributeEmail = new CognitoUserAttribute(dataEmail);

  attributeList.push(attributeEmail);

  userPool.signUp(
    username,
    password,
    attributeList,
    null,
    function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        // eventBus.$emit('signUpError', err);
        return;
      }
      const cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
    }
  );
}

export function authenticateNewUser(data) {
  const { username, code } = data;
  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(code, true, function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }
    console.log('call success: ' + result);
  });
}

export function signIn(data) {
  const { username, password } = data;
  const authenticationData = {
    Username: username,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  // cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      let idToken = result.getIdToken().getJwtToken();
      console.log(idToken, result);
      // eventBus.$emit('signInSuccess', { result, cognitoUser})
    },
    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
    customChallenge: function () {
      // let otpCode;
      // const getCode = new Promise((resolve, reject) => {
      //   // store.dispatch('setOtpDialog', true);
      //   // eventBus.$on('codeEntered', (code) => {
      //   //   store.dispatch('setOtpDialog', false);
      //     otpCode = code;
      //     resolve('Success');
      //   });
      // });
      // getCode.then(() => {
      var otpCode = prompt('Give it up!');
      cognitoUser.sendCustomChallengeAnswer(otpCode, this);
      // });
    },
  });
}
