function SelectAllData(){
    firebase.database().ref('users').once('value',
    function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var fName = CurrentRecord.val().first_name;
                var lName = CurrentRecord.val().last_name;
                var sec= CurrentRecord.val().section;
                var snum = CurrentRecord.val().student_number;
                AddToTable(fName,lName,sec,snum);
            }
        );
    })
}

window.onload = SelectAllData;

function AddToTable(fName,lName,sec,snum){
    var tbody = document.getElementById('table1');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    td1.innerHTML = fName;
    td2.innerHTML = lName;
    td3.innerHTML = sec;
    td4.innerHTML = snum;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    tbody.appendChild(row);
    console.log(td1)
}
