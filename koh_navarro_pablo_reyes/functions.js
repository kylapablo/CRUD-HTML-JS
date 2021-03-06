const studnum = document.getElementById('studnum');
const userID = document.getElementById('userid');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const section = document.getElementById('section');
const add = document.getElementById('add');
const update = document.getElementById('update');
const remove = document.getElementById('remove');

add.addEventListener('click', e => {
    e.preventDefault();
    axios({
        method: 'post',
        url: '/save',
        data: {
            studnum: studnum.value,
            userID: userID.value,
            first_name: firstName.value,
            last_name: lastName.value,
            section: section.value
        }
    });
});

update.addEventListener('click', e => {
    e.preventDefault();
    axios({
        method: 'put',
        url: '/update',
        data: {
            studnum: studnum.value,
            first_name: firstName.value,
            last_name: lastName.value,
            section: section.value,
            userID: userID.value,
        }
    });
});

remove.addEventListener('click', e => {
    e.preventDefault();
    axios({
        method: 'delete',
        url: '/remove',
        data: {
            
            userID: userID.value,
        }
    });
});

function newUser() {
    alert("New User Added!");
  }

function updateUser() {
    alert("User Updated!");
  }

function deleteUser() {
    alert("User Deleted!");
  }
