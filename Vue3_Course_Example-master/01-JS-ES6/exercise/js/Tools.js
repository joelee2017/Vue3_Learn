const Add = (a,b) => {
  return a + b ;
}

export const Name = "Joe";
export const age = 12;
//export function () {} // 錯誤
export const Remove = (a,b) =>a-b; // 允許

// 透過 export default 方式將函式丟出去給外部使用
// 可以丟很多東西出去但 default 只能有一個
// 並且 export  出去的東西，只能用 const 方式外拋
export default Add;
