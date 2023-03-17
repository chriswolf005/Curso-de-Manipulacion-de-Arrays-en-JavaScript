function solution(array) {
    // Tu código aquí 👈 
    return array.map(item => {
      return {
        ...item,
        taxes: Math.trunc(0.19 * (item.price))
      };
    });
  }; 