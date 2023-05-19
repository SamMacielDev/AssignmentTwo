
//formatting the div where the content will be shown, so it looks well organized:
const rootDiv = document.getElementById("root");
rootDiv.classList.add('border');
rootDiv.classList.add('p-5');
rootDiv.classList.add('shadow');

//First I need to Fetch a request to load JSON file by linking json to JS:
fetch("scp.json")
.then(response => response.json())  //Here I am parsing the response as JSON
.then(      //Using the data method to get Element:
        subjects =>
        {
            subjects.forEach (
                subject =>
                    {
                    const subjectHeader = document.createElement('h2');
                    subjectHeader.innerHTML = "Subject";
                    const subjectPar = document.createElement('p');
                    subjectPar.innerHTML = subject.subject;
                    rootDiv.appendChild(subjectHeader);
                    rootDiv.appendChild(subjectPar);

                    const objectClassHeader = document.createElement('h2');
                    objectClassHeader.innerHTML = "Class";
                    const objectClassPar = document.createElement('p');
                    objectClassPar.innerHTML = subject.objectClass;
                    rootDiv.appendChild(objectClassHeader);
                    rootDiv.appendChild(objectClassPar);

                    const descriptionHeader = document.createElement('h3');
                    descriptionHeader.innerHTML = "Description";
                    const descriptionPar = document.createElement('p');
                    descriptionPar.innerHTML = subject.description;
                    rootDiv.appendChild(descriptionHeader);
                    rootDiv.appendChild(descriptionPar);

                    const containmentInformationHeader = document.createElement('h3');
                    containmentInformationHeader.innerHTML = "Containment Information";
                    const containmentInformationPar = document.createElement('p');
                    containmentInformationPar.innerHTML = subject.containmentInformation;
                    rootDiv.appendChild(containmentInformationHeader);
                    rootDiv.appendChild(containmentInformationPar);

                    const button = document.createElement('button');
                    button.textContent = "Read item description";

                    button.addEventListener(
                        'click', 
                        () =>
                        {
                        const speech = new SpeechSynthesisUtterance(subject.description);
                        window.speechSynthesis.speak(speech);
                        }
                    ),
                    rootDiv.appendChild(button);
                    const hr = document.createElement('hr');
                    rootDiv.appendChild(hr);

                }
                          
            );
        } 
    )
    .catch(error =>console.error(error));