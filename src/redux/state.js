import rerenderEntireTree from "../render"


let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'hi,how are you?', likesCount: 0 },
            { id: 2, message: 'it is my first post', likesCount: 12 },
            { id: 3, message: 'blabla', likesCount: 11 },
            { id: 4, message: 'Dada', likesCount: 11 }
        ],
        newPostText: '999',

    },
    dialogsPage: {
        message: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Do you think visualization can change thinking?' },
            { id: 3, message: 'Yo yo' },
            { id: 4, message: 'Yo bro' },
            { id: 5, message: 'Yo' },
        ],
        dialogs: [
            { id: 1, name: 'Dimich' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Valera' }
        ]
    },
    sidebar: {
        sidebarData: []
    }
}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
   
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}
export let updateNewPost = (newText) => {

    state.profilePage.newPostText = newText;
    
    rerenderEntireTree(state);

}
export default state
