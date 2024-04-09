function student() {
    document.getElementById('listS').innerHTML = '';
    //Gather the hardcoded list of students
    const students = studentList();
    
    students.forEach(function (student) {
        const li = document.createElement('li');
        li.innerHTML = 'Name: ' + student.name + '<br>Area of Study: ' + student.Study + '<br>GPA: ' + student.GPA + "<br><br>" +
        '<button class="edit-btn">Edit</button>'
        + '<button class="save-btn" style="display:none;">Save Changes</button>'
        + '<button class="delete-btn">Delete</button>';
        //Add students to the list of students
        document.getElementById('listS').appendChild(li);
    });
    //Add edit, save, and delete buttons.
    addEditEventListeners();
    addDeleteEventListeners();
}

function addStudent(e) {
    e.preventDefault();

    const name = document.getElementById('studentname').value;
    const study = document.getElementById('study').value;
    const gpa = document.getElementById('gpa').value;

    const li = document.createElement('li');
    li.innerHTML = 'Name: ' + name + '<br>Area of Study: ' + study + '<br>GPA: ' + gpa + "<br><br>" + 
        '<button class = "edit-btn">Edit</button>'
        + '<button class = "save-btn" style = "display:none;">Save Changes</button>'
        + '<button class = "delete-btn">Delete</button>';

    document.getElementById('listS').appendChild(li);
    //Clear the form
    document.getElementById('studentname').value = "";
    document.getElementById('study').value = "";
    document.getElementById('gpa').value = "";
    //Add edit, save, and delete buttons.
    addEditEventListeners();
    addDeleteEventListeners();
};

// The Hard-Coded list of students.
function studentList() {
    var stuList = [];
    stuList = [
        { name: 'Jayden Cathcart', Study: 'Computer Science', GPA: '3.01'},
        { name: 'James Kozek', Study: 'Computer Science', GPA: '4.00'},
        { name: 'Zyaire Williams', Study: 'Biology', GPA: '3.70'},
        { name: 'Keith Lonon', Study: 'Computer Science', GPA: '2.98'}
    ]

    return stuList;
}




function addDeleteEventListeners() {
    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const listItem = this.parentNode;
            listItem.parentNode.removeChild(listItem);
        });
    });
}

function addEditEventListeners() {
    // Add event listeners for edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const listItem = this.parentNode;
            const content = listItem.innerHTML;
            listItem.setAttribute('contenteditable', 'true');
            listItem.querySelector('.edit-btn').style.display = 'none';
            listItem.querySelector('.save-btn').style.display = 'inline';
        });
    });
    // Add event listeners for save buttons
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const listItem = this.parentNode;
            listItem.removeAttribute('contenteditable');
            listItem.querySelector('.edit-btn').style.display = 'inline';
            listItem.querySelector('.save-btn').style.display = 'none';

        });
    });
}

window.onload = function () {
    document.getElementById('studentAdd').addEventListener('submit', addStudent);
    student();
}
