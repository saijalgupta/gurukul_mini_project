var emailCode, email, pass, remembered;

const remember = document.getElementById("remember");
const mRemember = document.getElementById("m-remember");

function show(event) {
    const eye = event.target;
    const passField = eye.previousElementSibling;
    if (eye.classList.contains("far")) {
        eye.classList.remove("fa-eye");
        eye.classList.remove("far");
        eye.classList.add("fa-eye-slash");
        eye.classList.add("fas");
        passField.type = "text";
        passField.style.letterSpacing = "0px";
    } else {
        eye.classList.remove("fa-eye-slash");
        eye.classList.remove("fas");
        eye.classList.add("fa-eye");
        eye.classList.add("far");
        passField.type = "password";
        passField.style.letterSpacing = "3px";
    }
}

window.onload = () => {
    if (sessionStorage.getItem("LXID")) {
        window.location = "./index.html";
    }
    if (localStorage.getItem("remembered")) {
        document.getElementById("mail").value =
            localStorage.getItem("user-email");
        document.getElementById("m-mail").value =
            localStorage.getItem("user-email");
        document.getElementById("pass").value =
            localStorage.getItem("user-pass");
        document.getElementById("m-pass").value =
            localStorage.getItem("user-pass");
    }
};

function readForm(form) {
    email = document.getElementById(form[0].id).value;
    pass = document.getElementById(form[1].id).value;
    let e1 = email.split("@")[0];
    let e2 = email.split("@")[1];
    e1 = e1.split(".").join("");
    e2 = e2.split(".").join("");
    emailCode = e1 + e2;
}

remember.addEventListener("change", () => {
    remembered = !remembered;
});

mRemember.addEventListener("change", () => {
    remembered = !remembered;
});

// function verification(event){
// readform();
// firebase.database().ref(`${emailCode}`)
// .set({
//   email: email,
//   password: password
// });
// }

function verification(event) {
    readForm(event.target);
    let loading = event.target.children[event.target.children.length - 1];
    event.preventDefault();
    loading.style.display = "block";
    try {
        firebase
            .database()
            .ref(`${emailCode}`)
            .on("value", function (snap) {
                loading.style.display = "none";
                if (snap.val() != null) {
                    if (
                        email !== snap.val().email ||
                        pass !== snap.val().password
                    ) {
                        setTimeout(() => {
                            alert("Invalid email id or password");
                        }, 200);
                    } else {
                        sessionStorage.setItem("LXID", email);
                        sessionStorage.setItem("LXSE", pass);
                        sessionStorage.setItem("LXNM", snap.val().name);
                        sessionStorage.setItem("LXRL", snap.val().role);
                        window.location = "./index.html";
                    }
                } else {
                    setTimeout(() => {
                        alert("User Does not exists.");
                    }, 200);
                }
            });
    } catch (err) {
        setTimeout(() => {
            loading.style.display = "none";
            setTimeout(() => {
                alert(err);
            }, 200);
        }, 2000);
    }
    if (remembered) {
        localStorage.setItem("remembered", true);
        localStorage.setItem("user-email", email);
        localStorage.setItem("user-pass", pass);
    }
}
