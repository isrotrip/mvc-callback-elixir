'use strict';

class View {
  static showList(dataList) {
    for (let i = 0; i < dataList.length; i++) {
      let { type, name }  = dataList[i];
      if (type === 'fire') {
        console.log(`Here come the hot pokemon ${name}`);
      } else if (type === 'plant') {
        console.log(`Join with nature, here we go ${name}`);
      }
    }
  }

  static showError(error) {
    console.log(`Error (ini tidak bohong):\n==================`);
    console.log(error);
  }

  static showSuccess(response) {
    console.log(`Success:\n==============`);
    console.log(response.message);
    console.log('Here are the data:');
    console.log(response.data);
  }
}

module.exports = View;