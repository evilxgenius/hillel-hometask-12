// Дан масив об'єктів.
// Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.
// І знайти суму всіх балансів користувачів

function balanceToNumber(balance) {
    return +balance.replace(/[$,]/g, '');
}

function selectUsersByBalanceMoreThan(amount, users) {
    return users.filter(user => balanceToNumber(user.balance) > amount);
}

function phoneNumbersOfUsers(users) {
    return users.map(user => user.phone);
}

function sumOfBalancesOfUsers(users) {
    return users.reduce((memo, user) => {
        let balance = balanceToNumber(user.balance);;

        return (isNaN(balance) ? 0 : balance) + memo;
    }, 0);
}

(() => {
    let richUsers = selectUsersByBalanceMoreThan(2000, users);
    let phoneNumbers = phoneNumbersOfUsers(richUsers);
    let sumOfBalances = sumOfBalancesOfUsers(users);
    let currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    console.log(`Phone numbers of rich user ->`, '[', phoneNumbers.join(', '), ']');
    console.log('Sum of balances of all users ->', currency.format(sumOfBalances));
})();
