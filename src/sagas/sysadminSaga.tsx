import { call, put, takeEvery, takeLatest, ForkEffect, all, fork, take } from 'redux-saga/effects'

function* getSysAdmin(action) {   
  try {    
    console.log('are we getting called here??? - GETDATA');
    const users = yield call(getSysAdminUser);    
    yield put({type: 'GETDATA_OK', users: users });
  }
  catch (e) {
    yield put({type: 'GETDATA_ERROR', message: e.message});
  }  
}

function getSysAdminUser() {  
  return fetch("http://localhost:3000/users/all");
}

function* fetchSysAdmin(): IterableIterator<ForkEffect> {

  console.log('get data / get data/');
  yield takeLatest('GET_DATA', getSysAdmin);
}

export default function* rootAdminSaga() {
  yield all([
    fork(fetchSysAdmin)
  ])
}
