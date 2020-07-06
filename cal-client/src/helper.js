import axios from "axios";

export const updateTime = (state, time) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i] == time) {
      state.splice(i, 1);
    }
  }

  return state;
};

export const updateEm = (state, date, nextdate, removalTime) => {
  const updatedTime = updateTime(state, removalTime);
  try {
    return axios.put(`http://localhost:3000/api/date/${date}/${nextdate}`, {
      time: updatedTime,
    });
  } catch (err) {
    console.log(err.response);
  }
};
