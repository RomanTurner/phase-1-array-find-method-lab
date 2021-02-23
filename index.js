

function resultCheck(record) {
  return record.find((obj) => obj.result === 'W');
}

function superbowlWin(record) {
    let winObj = resultCheck(record)
    if (winObj != undefined) {
        return winObj.year;
    } 
    else {
        return undefined;
    }
}
