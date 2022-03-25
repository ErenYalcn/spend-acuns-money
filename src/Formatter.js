const Formatter = (money) => {
    return money.toLocaleString('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    });
}

export {Formatter}