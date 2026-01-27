// Check for permissions from roles

function result(obj, a, b) {
    if (Object.keys(obj).includes(a)) {
        if (obj[a].includes(b)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

roles={ admin:["read","write"], user:["read"], staff: ["write"]}
checkRole="user",
action="write"

console.log(result(roles, checkRole, action));