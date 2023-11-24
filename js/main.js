function inversion(){

    //1. Ocultar la imagen y mostrar el panel con los datos de la simulacion
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");
    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    //2. Capturamos y mostramos los datos que no se calculan
    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;

    const nombresShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show")

    nombresShow.innerText = campoNombres;
    emailShow.innerText = campoEmail;

    //3. Capturamos los datos de inversion y tiempo, creamos las variables de ganancia y ganancia total

    const inversion = document.getElementById("inversion").value;
    const tiempo = document.getElementById("tiempo").value;
    const gananciaShow = document.getElementById("total-show");
    const gtotalShow= document.getElementById("ganancia-show");

    let ganancia = 0;
    let gananciaTotal = 0;

    //4. Validamos o comparamos el tiempo de inversión, según este mostramos la ganancia, el total y los demas datos

    switch (tiempo) {

        case "1":
            ganancia = (inversion * 2.4)/100 * 12;
            gananciaTotal = parseFloat(inversion) + parseFloat(ganancia);
            gananciaShow.innerText = gananciaTotal;
            gtotalShow.innerText = ganancia;

            break;

        case "2":
            ganancia = (inversion * 2.9)/100 *24;
            gananciaTotal = parseFloat(inversion) + parseFloat(ganancia);
            gananciaShow.innerText = gananciaTotal;
            gtotalShow.innerText = ganancia;

            break;

        case "3":
            ganancia = (inversion * 3.3)/100 *36;
            gananciaTotal = parseFloat(inversion) + parseFloat(ganancia);
            gananciaShow.innerText = gananciaTotal;
            gtotalShow.innerText = ganancia;

    }
    
    

}

