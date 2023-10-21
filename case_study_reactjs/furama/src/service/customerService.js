const customerType = ["Thành viên","Bạc","Vàng", "Kim cương"]
const customers = [
    {
        id: 1,
        name: 'Nguyễn Dương',
        birthday: '20/04/1995',
        gender: 0,
        identity: '20000109210',
        phoneNumber: '0707600447',
        email: 'nguyenduong@gmail.com',
        customerType: customerType[0],
        address: 'Quảng Nam'
    },
    {
        id: 2,
        name: 'Mỹ Hạnh',
        birthday: '06/03/2001',
        gender: 1,
        identity: '20000109210',
        phoneNumber: '0707600447',
        email: 'myhanh@gmail.com',
        customerType: customerType[1],
        address: 'Quảng Nam'
    },
    {
        id: 3,
        name: 'Mỹ Liên',
        birthday: '20/09/2000',
        gender: 1,
        identity: '20000109210',
        phoneNumber: '0707600447',
        email: 'mylien@gmail.com',
        customerType: customerType[2],
        address: 'Đà Nẵng',
    },
    {
        id: 4,
        name: 'Bảo Thiện',
        birthday: '20/09/1998',
        gender: 0,
        identity: '20000109210',
        phoneNumber: '0707600447',
        email: 'baothien@gmail.com',
        customerType: customerType[3],
        address: 'Quảng Bình'
    }
];


function getAll() {
    return customers;
}

console.log(customers)
export {getAll} ;