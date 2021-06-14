// function h ({ participants, sports }) {
// 	const pairs = [];
//   const { length } = sports;
// 	for (let i = 0, j = length - 1; i < length; i += 1, j -= 1) {
//     	pairs.push(Array.of(participants[j], sports[i]));
//     }
//   return pairs;
// }

function h ({ participants, sports }) {  
  /**  
   * Подобно оператору new создает экземпляр объекта,  
   * используя функцию-конструктор и параметры для нее  
   */  
  function constructFrom (fnConstructor, participants, sports) {  
      const res = { ...fnConstructor.prototype };

      fnConstructor.call(res, participants, sports);  
      return res;  
  }  

  /**  
   * Создает пары вида [’вид спорта’, ’имя участника’],  
   * где первому виду спорта соответствует последний участник  
   */  
  function assignParicipants () {  
    // console.log('hi!');
      const participants = this.participants;  
      const sports = this.sports;  
      const orderIndexes = [];
      const { length } = sports;  
      let i = 0;

      while (i < length) {  
        const index = length - i - 1;
          orderIndexes.push(function() {  
              return index;
          });  
          i += 1;
      };

      return orderIndexes.map(  
        (getSportIndex, i) => ([sports[i], participants[getSportIndex()]])  
        );
  }  

  function Contest (participants, sports) {  
      this.participants = participants;  
      this.sports = sports;  
  };

  Contest.prototype.assignParicipants = assignParicipants; 
  const contest = constructFrom(Contest, participants, sports);
  return contest.assignParicipants();
}

const data = {
  "participants": ["Mary", "Kate"],
  "sports": ["football", "hockey"]
};

console.log(h(data));