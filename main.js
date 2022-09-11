const delZero = (e) => {
    let val = e.value;
    val = val.trim().charAt(0) == '0' ? val.substring(1, val.length) : val;
    e.value = val;
}