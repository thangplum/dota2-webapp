import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history';
import { TeamsState } from './teams/types'
import { teamsReducer } from './teams/reducer'
import teamsSaga from './teams/saga'
import { all, fork } from 'redux-saga/effects'

//top-level state
export interface ApplicationState {
    teams: TeamsState
    router: RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    teams: teamsReducer,
    router: connectRouter(history)
  })

export function* rootSaga() {
    yield all([fork(teamsSaga)])
}