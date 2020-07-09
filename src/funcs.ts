interface info {
    name: string
}
export function sayHi(v: info): void {
    console.log(`Hello ${v.name}`);
};
export function user1() {
    sayHi({ name: 'user1' });
}
export function user2() {
    sayHi({ name: 'user2' });
}
export function user3() {
    sayHi({ name: 'user3' });
}