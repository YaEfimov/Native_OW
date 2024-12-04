
//// 1. Типы данных
//// данные делятся на 2 группы
//
//// примитивы (хранятся в стеке (фиксированный размер 1 мб))
//// string, number, boolean, null, underfined, symbol, BigInt
//
//// ссылочные типы данных (куча, может увеличиваться при необходимости)
//// object, array, function / class, map, set

//// 2. Объекты

// const user1 = { // в переменной у нас хранится ссылка на объект
//     name: "Bob",
//     age: 32,
//     isStudent: false
// }
//
// const user2 = user1
//
// console.log(user2 === user1) // true, User2 и User1 содержит ссылку на один объект

//// для копирования объекта используется Spread
//// Копирует только поверхности

// const user1 = {
//     name: "Bob",
//     age: 32,
//     isStudent: false
// }
//
// const user2 = {...user1, name: "Alex"} // копируем объект (создаем новый)
// console.log(user1) // { name: 'Bob', age: 32, isStudent: false }
// console.log(user2) // { name: 'Alex', age: 32, isStudent: false }
// console.log(user2 === user1) // false

//// Рассмотрим массив объектов

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: true,
//     },
// ]

// const userCopy = [...users]
// console.log(userCopy === users) // false, скопировали массив

//// УДАЛЕНИЕ в массиве
//// мутабельно через pop() (так не надо)

// users.pop()
// console.log(users)

//// немутабельно, удаление с помощью копирования

// const userCopy = [...users].pop()
// console.log(userCopy) // { id: 4, name: 'Donald', isStudent: true }
// console.log(users === userCopy)

//// !!! делаем копию = вносим изменения в копию = используем копию с изменениями

//// SPREAD
//// Spread оператор копирует только поверхности
//// сам объект копируется, но его вложенные объекты или элементы могут оставаться ссылками на исходные объекты, а не создавать
//// глубокие копии каждого элемента.

// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// }

// user1Copy = {...superUser}
// user1Copy.address.city = 'London'
// console.log('userCopy', user1Copy.address.city) //London
// console.log('superUser', superUser.address.city) //London
// console.log(user1Copy)

//// Чтобы не копировать каждый уровень вложенности используют structuredClone

// const superUserCopy = structuredClone(superUser)
// superUserCopy.address.city = "Irkutsk"
//
// console.log(superUserCopy.address.city)
// console.log(superUser.address.city)

/////////////////////////////////////////////////////////////////////////////////////////////
// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ И ОБЪЕКТОВ
/////////////////////////////////////////////////////////////////////////////////////////////

//// 1. Деструктуризация массивов


