// import create from 'zustand';

// const useStore = create((set) => ({
//   token:  null,
//   setToken: (newToken) => {
//     set({ token: newToken });
//   },
//   userData: null,
//   setUserData: (newUserData) => {
//     set({ userData: newUserData });
//   },
//   playerData:null,
//   setPlayerData:(newPlayerData)=>{
//     set({ playerData: newPlayerData });
//   },
//   teamData:null,
//   setTeamData:(newTeamData)=>{
//     set({ TeamData: newTeamData });
//   },
//   MatchData:null,
//   setMatchData:(newMatchData)=>{
//     set({ MatchData: newMatchData });
//   }
// }));

// export default useStore;
import create from 'zustand';
import Cookies from 'js-cookie';

const initialState = {
  token: null,
  userData: null,
  playerData: null,
  teamData: null,
  MatchData: null,
};

const useStore = create((set) => {
  // Try to get initial state from cookies
  const storedState = JSON.parse(JSON.stringify(Cookies.get('myAppState'))) || initialState;

  set(storedState);

  return {
    setToken: (newToken) => {
      set({ token: newToken });
      Cookies.set('myAppState', JSON.stringify(useStore.getState()));
    },
    setUserData: (newUserData) => {
      set({ userData: newUserData });
      Cookies.set('myAppState', JSON.stringify(useStore.getState()));
    },
    setPlayerData: (newPlayerData) => {
      set({ playerData: newPlayerData });
      Cookies.set('myAppState', JSON.stringify(useStore.getState()));
    },
    setTeamData: (newTeamData) => {
      set({ teamData: newTeamData });
      Cookies.set('myAppState', JSON.stringify(useStore.getState()));
    },
    setMatchData: (newMatchData) => {
      set({ MatchData: newMatchData });
      Cookies.set('myAppState', JSON.stringify(useStore.getState()));
    },
  };
});

export default useStore;
