import * as types from '../constants/ActionTypes'

export function addData(name, phone) {
  return {type: types.ADD_DATA, name, phone}
}

export function deleteData(id) {
  return {type: types.DELETE_DATA, id}
}

export function updateData(id, name, phone) {
  return {type: types.UPDATE_DATA, id, name, phone}
}
