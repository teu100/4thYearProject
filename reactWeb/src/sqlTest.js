const {Connection, Request} = require("tedious");

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "teu100",
            password: "Mcardoso@2020"
        },
        type: "default"
    },
    server: "4thyearprojectx00149064.database.windows.net",
    options: {
        database: "4thYearProject",
        encrypt: true
    }
};

const connection = new Connection(config);

connection.on("connect", err => {
    if(err){
        console.error(err.message);
    }else{
        getEmployees();
    }
});

function getEmployees(){
    console.log("Reading rows from the Table...");

    //Read all rows from table
    const request = new Request('SELECT * FROM Employee',
    (err,rowCount) => {
        if(err){
            console.error(err.message);
        }else{
            console.log(`${rowCount} row(s) returned`);
        }
    });

    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}

//*
//CREATE TABLE TASK (
   // taskID int IDENTITY(1,1) PRIMARY KEY,
   // dueDate DATE,
   // taskDescription varchar(1500),
   // personResposible varchar(255),
   // employeeID int,
   // priorityLevel varchar(50) CHECK (priorityLevel='low' OR priorityLevel='Medium' OR priorityLevel='High'),
   // FOREIGN KEY (employeeID) REFERENCES Employee(employeeID)
   // add status column that gets its value from the column its is in the web page and its saves in the database
//)//

//INSERT INTO Task (duedate, taskDescription, personResposible, priorityLevel) VALUES ('2020-11-19','This is my task in the database','Mateus','High');
///