### Rodar a api
## npm install 
## npm start 

## endpoints:
# students 
/student/add-student
/student/get-student-by-enrollment?enrollment=
/student/get-students
/student/delete-student-by-enrollment?enrollment=
/student/edit-student-by-enrollment?enrollmentToEdit=
/student/patch-student-course?enrollmentToEdit=
# courses
/course/add-course
/course/get-course-by-code?code=
/course/get-courses
/course/delete-course-by-code?code=
/course/edit-course-by-code?codeToEdit=
/course/patch-course-name?codeToEdit=


## Exemplo de estudante para ser adicionado

    {
        "name": "Fulano",
        "course": {
            "code": "12345",
            "name": "sistemas de informação",
            "syllabus": "SI"
        },
        "enrollment": "9876SINF"
    }

## Exemplo de curso para ser adicionado

    {
        "code": "123456789",
        "name": "outro curso",
        "syllabus": "OC"
    }