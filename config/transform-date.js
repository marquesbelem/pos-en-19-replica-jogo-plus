
const TransformDate = (_date) => {
    var timestamp = _date
    var date = new Date(timestamp);
    let dateFormatada = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
    return dateFormatada;
}

export default TransformDate;