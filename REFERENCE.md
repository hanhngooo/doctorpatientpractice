App has 5 pages:

- A homepage with contact details
- A page where patients can see who is on duty and contact details
- A page where new patients can sign up
- A page where doctors view which patients are in their database
- A detail page view the details of a specific patient

Overview of the entire api
https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/

Endpoints:
GET /doctors
https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

GET /patients
https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients

GET /patients/:patientId
https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/5856675843

A JSON with all the data:
https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/db

### 1. As a patient I want to be able to navigate to different pages so I can find the information I am looking for

    4 Static Routes are implemented using react router
    Each route renders a different component
    A navbar can be used to navigate between the static pages
    2 Buttons link to the correct pages
    The navbar indicates what page you are on

    Hint: to indicate what page a user is on use the `<NavLink />` component

### 2. As a patient I want know how and when to contact the practice

    Phone number is displayed on both pages
    Wether the practice is open right now is displayed on both pages
    Wether the practice is open or closed is dynamic, not hardcoded
    To display this information the same component is reused on both pages

Hint: You will have to google how to get the current hour of the day using javascript to be able to display **open** or **closed** dynamically.

### 3. As a patient I want to see which doctors are on duty so I can determine wether I should go to the doctor today

    Doctor availabilty is displayed on the who is on duty page
    The data is fetched from the api, not hardcoded
    If the data is still being fetched, display "loading" to the user
    The data is displayed using .map
    There is a warning in the console regarding "key" props
    Doctor availability is displayed using an html `table` element

### 4. As a new patient I want to be able to sign up

     A form is displayed on the Patient Signup page
     The form has inputs for firstName, lastName, email, phoneNumber & submit
     The form has a select input for gender, and a date input for dateOfBirth
     The state of the form is controlled using React useState hook(s)
     When the form is submitted, the user input for all form fields is console.logged
     When the form has been submitted, we show a success message to the user
     The success message is an alert, prompt or confirm popup
     Submitting the form refreshes the page

### 5. As a doctor I want to be able to view which patients I have, so I can see who I am responsible for

### 6. As a doctor I want to be able to view the details of my patients, so I can make good decisions

    1 Dynamic route is implemented using React Router for the patient detail page
    The page displays the firstname, lastname, gender, dateOfBirth of a patient
    The page displays the email, phoneNumber & prescriptions of a patient
    The data on the page is fetched from the api, not hardcoded
    The data of all the patients is fetched from the api on this page

Ref:
Mapping prescriptions array give error: https://www.debuggr.io/react-map-of-undefined/

### 7. Express server
