var preferredName = function (fName, lName) {
    var isFirstNameNotDefined = ((typeof fName === 'undefined') || (fName === ''));
    var isLastNameNotDefined = ((typeof lName === 'undefined') || (lName === ''));

    

    if ((isFirstNameNotDefined && isLastNameNotDefined) || (!isFirstNameNotDefined && !isLastNameNotDefined)) {
        return false;
    } else if (isFirstNameNotDefined && !isLastNameNotDefined) {
        return lName;
    } else if (!isFirstNameNotDefined && isLastNameNotDefined) {
        return fName;
    }

};