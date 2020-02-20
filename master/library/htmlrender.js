function generateHTML(answers) {
    console.log(answers)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
        .card {
            background-color: lightgrey;
            display: inline-block;
        }
        .card-body {
            margin: 0 auto;
            text-align: center;
        }
        li {
            text-align: center;
        }
        .btn {
            background: black;
            border: none;
        }
        .list-group-item {
            color: red;
        }
        .jumbotron {
        background-color: lightgray;
        text-align: center;
        }
        .heading1 {
        color: black;
        font-size: 72px;
        font-weight: bolder;
        }
        .heading2 {
        color: black;
        font-size: 28px;
        }
        .cards {
            margin: 0 auto;
            width: 80%;
        }
        </style>
    </head>
    <body background="Assets\gaming-pattern.png">
        <div class="jumbotron">
            <p class="heading1">MEET MY TEAM</p>
        </div>
        <container class="cards">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <image class="manicon" src = "master\templates\Assets\manager.png"></image><br>
                    <h4 class="card-title">${answers.managerName}</h4>
                <h5 class="card-subtitle mb-2 text-muted">Manager </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${answers.managerId ?answers.managerId : " "}</li>
              <li class="list-group-item">${answers.managerPhoneNumber ?answers.managerPhoneNumber: " "}</li>
              <li class="list-group-item">${answers.managerEmail ?answers.managerEmail: " "}</li>
            </ul>
                
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
                <image class="manicon" src = "master\templates\Assets\eng.jpg"></image><br>
            <h4 class="card-title">{$answers.engineerName ?answers.engineerName: " "}</h4>
                <h5 class="card-subtitle mb-2 text-muted">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${answers.engineerId ?answers.engineerId: " "}</li>
              <li class="list-group-item">${answers.engineerGithub ?answers.engineerGithub: " "}</li>
              <li class="list-group-item">${answers.engineerEmail ?answers.engineerEmail: " "}</li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
                <image class="manicon" src = "master\templates\Assets\intern.png"></image><br>
                <h4 class="card-title">${answers.internName ?answers.internName: " "}</h4>
                <h5 class="card-subtitle mb-2 text-muted">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${answers.internId ?answers.internId: " "}</li>
              <li class="list-group-item">${answers.internSchool ?answers.internSchool: " "}</li>
              <li class="list-group-item">${answers.internEmail ?answers.internEmail: " "}</li>
            </ul>
          </div>
        </container>
    </body>
    </html>`
}

module.exports = generateHTML

// <!-- previously had all template literals as  {$answers.engineerName ?answers.engineerName: " "} removed "answers."-->