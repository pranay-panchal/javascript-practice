async function name(firstname, lastename) {
    return new Promise(function (resolve, reject) {
        try {
            const fullname = `${firstname} ${lastename}`;
            console.log(fullname);
            return resolve(fullname);
        } catch (error) {
            reject(error);
        }
    });
}

function Name(firstName, lastName) {
    try {
        const fullName = `${firstName} ${lastName}`;
        console.log(fullName);
        return fullName;
    } catch (error) {
        console.error('Oops something went wrong');
    }
}
 
Name('Nidhi', 'Panchal');
name('Pranay', 'Panchal');

