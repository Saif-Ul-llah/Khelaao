import create from 'zustand';

// const parseCookieJSON = (cookieName) => {
//   const cookieValue = document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${cookieName}\\s*=\\s*([^;]*).*$)|^.*$`), '$1');
//   try {
//     return cookieValue ? JSON.parse(cookieValue) : null;
//   } catch (error) {
//     console.error(`Error parsing ${cookieName} cookie JSON:`, error.message);
//     return null;
//   }
// };

const useStore = create((set) => ({
  token:  null,
  setToken: (newToken) => {
    // document.cookie = `token=${newToken}; Secure; HttpOnly; SameSite=Strict`;
    set({ token: newToken });
  },
  userData: null,
  setUserData: (newUserData) => {
    // document.cookie = `userData=${JSON.stringify(newUserData)}; Secure; HttpOnly; SameSite=Strict`;
    set({ userData: newUserData });
  },
  playerData:null,
  setPlayerData:(newPlayerData)=>{
    set({ playerData: newPlayerData });
  }
}));

export default useStore;
