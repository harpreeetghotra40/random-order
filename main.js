
function myFunction() {
    var x = document.getElementById("nav-responsive");
    if (x.className === "nav-collapse" && window.innerWidth < 1000) {
        x.className = "responsive";
    } else {
        x.className = "nav-collapse";
    }
}

function displayPanel(y){
    var images = ["images/robertReitzan.png", "images/heinHundal.png","images/andrewRaffensperger.png","images/larissaPosner.png"];
    document.getElementById("display-image").src = images[y];

    var names = ["Robert Reitzan", "Dr. Hein S. Hundal" , "Andrew Raffensperger" , "Larissa Posner"];
    document.getElementById("team-member").innerHTML = names[y];

    var info = ["Rob’s decades of technical and financial success in applying Game Theory, AI and Machine Learning are the foundation of Random Order. Beginning as a professional blackjack player in the 1980s, Rob soon realized that typical card-counting strategies could go only so far. He then developed innovative, data-driven blackjack techniques to exploit inefficiencies, achieving alpha through the prediction of nonrandom shuffles.",
                "At the Applied Research Laboratory of Pennsylvania State University, Hein was an Associate Research Engineer and an Instructor in both the Mathematics and Electrical Engineering departments (1998–1999 and 2010–2016). In his engineering role, he applied numerous machine-learning techniques to several defense applications, including acoustic / EM signal processing, designing AI applications for underwater vehicles, and satellite engineering. He designed and implemented AI, signal processing, tracking, and guidance algorithms in C++, Mathematica, Ada, Python / Theano, and MATLAB. ",
                "Andrew has completed numerous projects for Random Order, including Arduino Bluetooth micro-controller projects (CES 2018), iPhone hardware projects, convolutional deep neural networks using the GPU, and investment software projects.Andrew’s many programming milestones include his reverse-engineering of the Napster protocol in 2000 and development of the first Macintosh Napster client, MacStar. He was featured in MacAddict magazine at the age of 14.",
                "Larissa Posner oversees all aspects of the business, including client advisory, operations and business development. With a track record of working alongside financial engineers technology specialists and scientists for nearly a decade she is an expert in bridging the gap between investors and inventors. Previously, Miss Posner served as a Vice President at Verition Fund Management, a global multi-strategy hedge fund with more then $250 Million under management. She began her career in corporate access consulting for small- and mid-cap NASDAQ and NYSE listed companies. Miss Posner holds a Series 65 Investment Advisor license. "
            ];
    document.getElementById("team-info").innerHTML = info[y];

    var position = ["Founder, Chief AI Officer", "Chief Scientist", "Software Engineer","Chief Business Officer"];
    document.getElementById("team-position").innerHTML = position[y];

    var x = document.getElementById("displayPanel");
    x.style.display = "block";
    

}

function closePanel(){
    var x = document.getElementById("displayPanel");
    x.style.display = "none";
}

