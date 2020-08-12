export const createProject = (project) => {
    return (dispatch, getstate, { getFireBase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('Students').add({
            ...project
        }).then(() => {
            console.log(project)
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT', err });
        })
    }
};