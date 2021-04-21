import { NOTES_CREATE, NOTES_LISTS, NOTES_DELETE, NOTES_EDIT } from '../type';

export const listNotes = () => {
  return {
    type: NOTES_LISTS,
  };
};

export const notesCreate = ( notes ) => {
  return {
    type: NOTES_CREATE,
    payload: notes
  };
};

export const notesDelete = ( id ) => {
  return {
    type: NOTES_DELETE,
    payload: id
  };
};

export const notesEdit = ( id ) => {
  return {
    type: NOTES_EDIT,
    payload: id
  };
};
