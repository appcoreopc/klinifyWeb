import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'
import { PHOTO_UPLOAD, PHOTO_UPLOAD_SUCCEEDED, PHOTO_UPLOAD_ERROR, UPLOAD_PHOTO_URL } from '../constants';

import getdataSaga from './sysadminSaga';

function uploadPhotoToServer(action) 
{ 
  return Promise.resolve("http://lorempixel.com/800/100/cats/");


/*  
  let userIds = action.usersId; 
  let role = action.role;
   
  const fetchSettings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify({
      usersId : userIds, 
      role : role
    })         
  };
  let updateUserUrl : string = UPLOAD_PHOTO_URL;
  return fetch(updateUserUrl, fetchSettings);
  
  */
}

export function* executePhotoUpload(action) {   
  try {    
   
    const result = yield call(uploadPhotoToServer, action.filename);    
    yield put({type: PHOTO_UPLOAD_SUCCEEDED, photo : result });
  }
  catch (e) {
    yield put({type: PHOTO_UPLOAD_ERROR, message: e.message});
  }  
}


//////////////

export default function* root() {
  yield all([   
    takeLatest(PHOTO_UPLOAD, executePhotoUpload)
  ])
}
