// console.log("test");

function task(id) {
    console.log(`Task ${id}`);
}

function longtask(id) {
    console.log(`Task ${id} started`);

    // for (let i = 0; i < 3e9; i++) {
    //     // wait
    // }

    global.setTimeout(() => {
        console.log(`Task ${id} finished`);
    }, 5000);

    
}

// task(1);
// longtask(2);
// task(3);
// task(4);


function getJhed(student, callback) {
    console.log(`Reading ${student} info!`);
    let jhed;
    setTimeout(() => {
        jhed = "jdoe23";
        console.log(`Recieved ${student} info`);
        callback(jhed);
    }, 4000);


}

function getCourses(jhed, callback) {
    let courses;
    console.log(`getting courses for ${jhed}`);

    setTimeout(() => {
        courses = ['c1', 'c2'];
        console.log(`Recieved ${jhed} courses`);
        callback(courses);
    }, 4000);
}

function getGrades(jhed, courses) {

}

function callbackAfterGotJhed(jhed) {
    console.log(jhed);
    getCourses(jhed, callbackAfterGotCourses);
}

function callbackAfterGotCourses(courses) {
    console.log(courses);
}
console.log("Listening to evenets");
getJhed("John Doe", callbackAfterGotJhed);
// console.log(jhed);
// const courses = getCourses(jhed);
// const grades = getGrades(jhed, courses);
// console.log(grades);

console.log("still listening to evenets");
